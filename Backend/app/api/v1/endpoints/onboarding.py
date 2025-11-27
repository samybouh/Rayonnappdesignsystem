# app/api/v1/endpoints/onboarding.py
import json
from typing import Any, Dict
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.db.models.users import User
from app.db.models.onboarding import OnboardingQuestion, UserOnboardingAnswer, OnboardingOption
from app.core.security import get_current_user, get_current_user_optional

router = APIRouter()  # ⬅️ pas de prefix ici

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/questions")
def list_questions(db: Session = Depends(get_db)) -> list[dict]:
    rows = (
        db.query(OnboardingQuestion)
          .filter(OnboardingQuestion.enabled.is_(True))
          .order_by(OnboardingQuestion.order.asc())  # champ 'order' de ta table
          .all()
    )

    out: list[dict] = []
    for q in rows:
        # options depuis la colonne JSON (ou table)
        if getattr(q, "options", None):
            options = q.options if not isinstance(q.options, str) else json.loads(q.options)
        else:
            opts = (
                db.query(OnboardingOption)
                  .filter(OnboardingOption.question_id == q.id)
                  .order_by(OnboardingOption.optorder.asc())
                  .all()
            )
            options = [{"value": o.value, "label": o.label} for o in opts]

        out.append({
            "id": q.id,
            "key": q.key,
            "label": q.label,
            "help": q.help,
            "type": q.type,
            "required": bool(q.required),
            "order": q.order or 0,
            "options": options,
            "min": q.min, "max": q.max, "step": q.step,
            "map_to": q.map_to,
        })
    return out

@router.post("/answer")
def save_answer(
    payload: Dict[str, Any],
    db: Session = Depends(get_db),
    current: User | None = Depends(get_current_user_optional),
):
    key = payload.get("key")
    if not key:
        raise HTTPException(status_code=400, detail="Missing 'key'")
    if current is None:
        return {"stored": False}

    q = db.query(OnboardingQuestion).filter(OnboardingQuestion.key == key).first()
    if not q:
        raise HTTPException(status_code=404, detail="Unknown question key")

    row = (
        db.query(UserOnboardingAnswer)
          .filter(UserOnboardingAnswer.user_id == current.id,
                  UserOnboardingAnswer.question_id == q.id)
          .first()
    )
    if row is None:
        db.add(UserOnboardingAnswer(user_id=current.id, question_id=q.id, value=payload.get("value")))
    else:
        row.value = payload.get("value")

    db.commit()
    return {"stored": True}

def _apply_mapping_to_user(user: User, answers: Dict[str, Any]):
    if "main_goal" in answers:        user.main_goal = answers["main_goal"]
    if "class_level" in answers:      user.class_level = answers["class_level"]
    if "subjects" in answers:         user.subjects = answers["subjects"]
    if "weekly_target_min" in answers:user.weekly_target_min = int(answers["weekly_target_min"])
    if "work_min" in answers:         user.work_min = int(answers["work_min"])
    if "break_min" in answers:        user.break_min = int(answers["break_min"])
    if "rounds" in answers:           user.rounds = int(answers["rounds"])

@router.post("/finish")
def finish_onboarding(
    payload: Dict[str, Any],
    db: Session = Depends(get_db),
    current: User = Depends(get_current_user),
):
    answers = payload.get("answers") or {}
    _apply_mapping_to_user(current, answers)

    if payload.get("onboarding_done"):
        current.onboarding_done = True
        if current.plan == "free" and current.trial_end_at is None:
            from datetime import datetime, timedelta, timezone
            current.trial_end_at = datetime.now(timezone.utc) + timedelta(days=14)

    db.commit()
    db.refresh(current)
    return {"ok": True, "user_id": current.id}
