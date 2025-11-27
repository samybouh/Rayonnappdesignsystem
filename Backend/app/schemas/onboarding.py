from pydantic import BaseModel
from typing import Literal, Optional, List, Any

class OBOption(BaseModel):
    value: str
    label: str
    icon: Optional[str] = None

class OnboardingQuestionRead(BaseModel):
    id: int
    key: str
    label: str
    help: str | None
    type: Literal["single_choice","multi_choice","slider","number","text","date","select"]
    required: bool
    order: int
    options: list[OBOption] | None
    min: int | None
    max: int | None
    step: int | None
    map_to: str | None

    class Config:
        from_attributes = True

class OnboardingQuestionCreate(BaseModel):
    key: str
    label: str
    help: str | None = None
    type: str
    required: bool = True
    order: int = 1
    options: list[OBOption] | None = None
    min: int | None = None
    max: int | None = None
    step: int | None = None
    map_to: str | None = None
    enabled: bool = True

class OnboardingQuestionUpdate(OnboardingQuestionCreate):
    pass
class OnboardingAnswerUpsert(BaseModel):
    key: str
    value: Any
class OnboardingFinishPayload(BaseModel):
    # toutes les réponses mises bout-à-bout (clé -> valeur)
    answers: dict[str, Any] = {}
    onboarding_done: bool = True


# app/schemas/onboarding.py
from pydantic import BaseModel
from typing import Any

class OnboardingAnswerUpsert(BaseModel):
    question_key: str
    answer: Any  # str | int | list[str] selon le type de question


from pydantic import BaseModel
from typing import Any

class OnboardingUpdate(BaseModel):
    first_name: str | None = None
    last_name: str  | None = None
    birth_date: str | None = None
    grade: str | None = None
    email: str | None = None
    onboarding_done: bool | None = None
    answers: dict[str, Any] | None = None

