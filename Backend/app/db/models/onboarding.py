from __future__ import annotations
from datetime import datetime, timezone
from sqlalchemy import Integer, String, Boolean, JSON, DateTime, ForeignKey, UniqueConstraint, Enum
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base

# app/db/models/onboarding.py
from typing import Optional
from sqlalchemy import Integer, String, Boolean, JSON
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base

class OnboardingQuestion(Base):
    __tablename__ = "onboarding_questions"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    key: Mapped[str] = mapped_column(String(50), unique=True, index=True, nullable=False)
    label: Mapped[str] = mapped_column(String(255), nullable=False)
    help: Mapped[Optional[str]] = mapped_column(String(500))
    type: Mapped[str] = mapped_column(String(30), nullable=False)
    required: Mapped[bool] = mapped_column(Boolean, default=True)

    order: Mapped[int] = mapped_column("order", Integer, default=1)

    options: Mapped[Optional[dict]] = mapped_column(JSON)   # JSON nullable
    min: Mapped[Optional[int]] = mapped_column(Integer)
    max: Mapped[Optional[int]] = mapped_column(Integer)
    step: Mapped[Optional[int]] = mapped_column(Integer)
    map_to: Mapped[Optional[str]] = mapped_column(String(50))
    enabled: Mapped[bool] = mapped_column(Boolean, default=True)


    

class OnboardingOption(Base):
    __tablename__ = "onboarding_options"
    id: Mapped[int]        = mapped_column(Integer, primary_key=True)
    question_id: Mapped[int] = mapped_column(ForeignKey("onboarding_questions.id"), index=True)
    label: Mapped[str]     = mapped_column(String(255))
    value: Mapped[str]     = mapped_column(String(128))
    tags_json: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    optorder: Mapped[int]  = mapped_column(Integer, default=0)
    __table_args__ = (UniqueConstraint("question_id", "value", name="uq_opt_q_val"),)

class UserOnboardingAnswer(Base):
    __tablename__ = "user_onboarding_answers"   # ← correspond à ta base actuelle
    __table_args__ = (UniqueConstraint("user_id", "question_id", name="uq_user_q"),)
    id: Mapped[int]          = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int]     = mapped_column(ForeignKey("users.id"), index=True, nullable=False)
    question_id: Mapped[int] = mapped_column(ForeignKey("onboarding_questions.id"), index=True, nullable=False)
    value: Mapped[dict | list | str | int | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

class UserMethodSlot(Base):
    __tablename__ = "user_method_slots"
    __table_args__ = (UniqueConstraint("user_id","slot", name="uq_user_slot"),)
    id: Mapped[int]      = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    slot: Mapped[str]    = mapped_column(Enum("comprehension","memo","revision","organisation","wildcard", name="method_slot"))
    method_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    score: Mapped[int]   = mapped_column(Integer, default=0)
    source: Mapped[str]  = mapped_column(Enum("algo","user", name="slot_source"), default="algo")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
