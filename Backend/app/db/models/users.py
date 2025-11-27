from sqlalchemy import String, Integer, Boolean, DateTime, func, DATE, Date, JSON
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base
from datetime import datetime, date

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    full_name: Mapped[str | None] = mapped_column(String(255), nullable=True)
    hashed_password: Mapped[str] = mapped_column(String(255), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    is_superuser: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    created_at: Mapped[None] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[None] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    last_login: Mapped[DateTime | None] = mapped_column(DateTime(timezone=True), nullable=True)

    date_of_birth: Mapped[date | None] = mapped_column(Date, nullable=True)
    class_level:   Mapped[str | None] = mapped_column(String(50), nullable=True)          
    theme:         Mapped[str]        = mapped_column(String(20), default="system")       
    subjects:      Mapped[list[str]]  = mapped_column(JSON, default=list)                 
    weekly_target_min: Mapped[int]    = mapped_column(Integer, default=300)               

    
    work_min:  Mapped[int] = mapped_column(Integer, default=45)
    break_min: Mapped[int] = mapped_column(Integer, default=10)
    rounds:    Mapped[int] = mapped_column(Integer, default=3)

   
    xp_total:      Mapped[int] = mapped_column(Integer, default=0)
    streak_days:   Mapped[int] = mapped_column(Integer, default=0)
    last_study_at: Mapped[date | None] = mapped_column(Date, nullable=True)

   
    plan:            Mapped[str]        = mapped_column(String(20), default="free")  
    trial_end_at:    Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    email_verified:  Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)

    main_goal:       Mapped[str | None] = mapped_column(String(50), nullable=True)
    onboarding_done: Mapped[bool]       = mapped_column(Boolean, default=False, nullable=False)