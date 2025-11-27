from pydantic import BaseModel, EmailStr
from typing import Optional, Literal, List, Any, Dict
from datetime import datetime, date


class UserBase(BaseModel):
    email: EmailStr
    full_name: str | None = None
    is_active: bool = True
    is_superuser: bool = False

class UserCreate(BaseModel):
    email: EmailStr
    full_name: str | None = None
    password: str

class UserRead(UserBase):
    id: int
    email: EmailStr
    full_name: str | None = None
    theme: Literal["light","dark","system"] | None = None
    subjects: List[str] | None = None
    weekly_target_min: int | None = None
    work_min: int | None = None
    break_min: int | None = None
    rounds: int | None = None
    xp_total: int | None = None
    streak_days: int | None = None
    class_level: str | None = None
    date_of_birth: date | None = None
    plan: str | None = None
    trial_end_at: datetime | None = None
    email_verified: bool | None = None
    main_goal: str | None = None
    #grade_level: str | None = None
    onboarding_done: bool

    



    class Config:
        from_attributes = True

class UserPreferencesUpdate(BaseModel):
    theme: Literal["light","dark","system"] | None = None
    subjects: List[str] | None = None
    weekly_target_min: int | None = None
    work_min: int | None = None
    break_min: int | None = None
    rounds: int | None = None

class UserOnboardingUpdate(BaseModel):
    
    main_goal: Optional[str] = None 
   
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    birth_date: Optional[date] = None   
    grade: Optional[str] = None          
    email: Optional[EmailStr] = None

    # flag final
    onboarding_done: Optional[bool] = None
    answers: Optional[Dict[str, Any]] = None

