from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from fastapi.security import OAuth2PasswordRequestForm

from app.core.security import create_access_token, get_password_hash, verify_password
from app.core.config import settings
from app.db.models.users import User
from app.db.session import SessionLocal
from app.schemas.user import UserCreate, UserRead
from app.schemas.auth import Token, LoginRequest
from app.schemas.auth import RegisterPayload, AuthResponse


router = APIRouter(tags=["auth"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register", response_model=AuthResponse, status_code=status.HTTP_201_CREATED)
def register(payload: RegisterPayload, db: Session = Depends(get_db)):
    email = payload.email.lower()
    if db.query(User).filter(User.email == email).first():
        raise HTTPException(status_code=409, detail="Email already registered")

    user = User(
        email=email,
        full_name=payload.full_name or "",
        hashed_password=get_password_hash(payload.password),
        is_active=True,
        is_superuser=False,
    )
    db.add(user); db.commit(); db.refresh(user)

    token = create_access_token({"sub": str(user.id)})
    return {"access_token": token, "token_type": "bearer"}

@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    # username = email côté frontend
    user = db.query(User).filter(User.email == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid credentials")

    token = create_access_token(user.email, expires=int(settings.ACCESS_TOKEN_EXPIRE_MINUTES))  # 👈 int, pas timedelta
    return {"access_token": token, "token_type": "bearer"}
