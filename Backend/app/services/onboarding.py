from typing import Any
from sqlalchemy import select
from sqlalchemy.orm import Session
from app.db.models import OnboardingQuestion, UserOnboardingAnswer, User
from datetime import datetime, timezone

def upsert_onboarding_answers(db: Session, user: User, answers: dict[str, Any]) -> int:
    if not answers:
        return 0

    keys = list(answers.keys())
    qs = db.execute(
        select(OnboardingQuestion).where(OnboardingQuestion.key.in_(keys))
    ).scalars().all()
    by_key = {q.key: q for q in qs}

    changed = 0
    for k, v in answers.items():
        q = by_key.get(k)
        if not q:
            continue

        row = db.execute(
            select(UserOnboardingAnswer)
            .where(UserOnboardingAnswer.user_id == user.id,
                   UserOnboardingAnswer.question_id == q.id)
        ).scalar_one_or_none()

        if row:
            row.value = v
            row.updated_at = datetime.now(timezone.utc)
        else:
            db.add(UserOnboardingAnswer(user_id=user.id, question_id=q.id, value=v))

        # Optionnel : map_to → met à jour des champs du profil
        if q.map_to:
            try:
                setattr(user, q.map_to, int(v) if q.type in ("number","slider") else v)
            except Exception:
                setattr(user, q.map_to, v)
        changed += 1

    db.flush()  # même session que "user"
    return changed

def compute_method_slots(db: Session, user: User, answers: dict[str, Any]) -> None:
    # TODO: brancher ton scoring à partir de tes fichiers (on le fera juste après).
    # Ici on laisse vide pour ne pas bloquer l’insert des réponses.
    return