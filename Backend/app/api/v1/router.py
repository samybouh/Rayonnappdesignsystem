from fastapi import APIRouter
from app.api.v1.endpoints import auth, users, onboarding, folders,ai

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth")
api_router.include_router(users.router)
api_router.include_router(onboarding.router, prefix="/onboarding", tags=["onboarding"])
api_router.include_router(folders.router)
api_router.include_router(ai.ai_router)    