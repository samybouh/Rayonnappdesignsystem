# app/api/v1/endpoints/users.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, object_session          # 👈 import object_session
from datetime import datetime, timedelta, timezone

from app.db.session import SessionLocal
from app.db.models.users import User
from app.core.security import get_current_user
from app.schemas.user import UserRead, UserPreferencesUpdate, UserOnboardingUpdate
from app.services.onboarding import upsert_onboarding_answers, compute_method_slots
from app.schemas.onboarding import OnboardingUpdate
from app.db.models.onboarding import OnboardingQuestion
from app.services.onboarding import upsert_onboarding_answers, compute_method_slots

router = APIRouter(prefix="/users", tags=["users"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/me", response_model=UserRead)
def me(current: User = Depends(get_current_user)) -> User:
    return current

@router.patch("/me/preferences", response_model=UserRead)
def update_my_preferences(
    payload: UserPreferencesUpdate,
    current: User = Depends(get_current_user),
) -> User:
    db = object_session(current)                              # 👈 use the session that loaded `current`
    if db is None:
        raise HTTPException(status_code=500, detail="DB session not found")

    data = payload.model_dump(exclude_none=True)
    for k, v in data.items():
        setattr(current, k, v)

    db.commit()
    db.refresh(current)
    return current

@router.patch("/me/onboarding", response_model=UserRead)
def update_onboarding(
    payload: UserOnboardingUpdate,
    current: User = Depends(get_current_user),
) -> User:
    db = object_session(current)                              # 👈 same session
    if db is None:
        raise HTTPException(status_code=500, detail="DB session not found")

    data = payload.model_dump(exclude_none=True)

    if "main_goal" in data:
        current.main_goal = data["main_goal"]

    if data.get("first_name") or data.get("last_name"):
        fn = data.get("first_name") or ""
        ln = data.get("last_name") or ""
        current.full_name = f"{fn} {ln}".strip() or current.full_name

    if "birth_date" in data:
        current.date_of_birth = data["birth_date"]
    if "grade" in data:
        current.class_level = data["grade"]

    if data.get("onboarding_done"):
        current.onboarding_done = True
        if current.plan == "free" and current.trial_end_at is None:
            current.trial_end_at = datetime.now(timezone.utc) + timedelta(days=14)

    db.commit()
    db.refresh(current)
    return current


@router.patch("/users/me/onboarding")
def update_onboarding(payload: OnboardingUpdate, current: User = Depends(get_current_user), db: Session = Depends(get_db)):
    data = payload.model_dump(exclude_unset=True)

    # 1) sépare les champs profil simples et les réponses d’onboarding
    question_keys = [k for (k,) in db.query(OnboardingQuestion.key).filter(OnboardingQuestion.enabled==True).all()]
    answers = {k: data.pop(k) for k in list(data.keys()) if k in question_keys}

    # 2) mets à jour le profil
    for field, value in data.items():
        setattr(current, field, value)

    # 3) upsert des réponses + éventuelle logique "method slots"
    if answers:
        upsert_onboarding_answers(db, current, answers)
        compute_method_slots(db, current, answers)  # si tu utilises ce score

    # 4) essai gratuit si onboarding_done = True et pas encore lancé
    if data.get("onboarding_done") and current.plan == "free" and current.trial_end_at is None:
        from datetime import datetime, timedelta, timezone
        current.trial_end_at = datetime.now(timezone.utc) + timedelta(days=14)

    db.commit()
    db.refresh(current)
    return current