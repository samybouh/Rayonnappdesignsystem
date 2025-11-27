# app/core/security.py
from datetime import datetime, timedelta, timezone
from typing import Optional, Union
from jose import jwt, JWTError
from fastapi import Depends, HTTPException, status, Header
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from passlib.context import CryptContext
from app.core.config import settings
from app.db.session import SessionLocal
from app.db.models.users import User

ALGORITHM = "HS256"
security = HTTPBearer(auto_error=False)

# 👉 garde UN seul pwd_context (choisis-en un ; bcrypt_simple suffit)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
# pwd_context = CryptContext(schemes=["bcrypt_sha256"], deprecated="auto")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

def create_access_token(subject: str, expires: Optional[Union[int, timedelta]] = None) -> str:
    """
    expires:
      - int  -> minutes
      - timedelta -> durée
      - None -> settings.ACCESS_TOKEN_EXPIRE_MINUTES
    """
    now = datetime.now(timezone.utc)
    if isinstance(expires, timedelta):
        exp_dt = now + expires
    elif isinstance(expires, int):
        exp_dt = now + timedelta(minutes=expires)
    else:
        exp_dt = now + timedelta(minutes=int(settings.ACCESS_TOKEN_EXPIRE_MINUTES))

    # JWT 'exp' en timestamp (plus sûr)
    to_encode = {"sub": subject, "exp": int(exp_dt.timestamp())}
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=ALGORITHM)

# --- deps (inchangé) ---
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db),
) -> User:
    if credentials is None or credentials.scheme.lower() != "bearer":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Missing bearer token")

    token = credentials.credentials
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")
        if not email:
            raise HTTPException(status_code=401, detail="Invalid token")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user

# --- helpers optionnels pour endpoints publics/mixtes ---

from typing import Optional, Any
from fastapi import Header

def _decode_token(token: str) -> dict[str, Any]:
    # lève JWTError si invalide
    return jwt.decode(token, settings.SECRET_KEY, algorithms=[ALGORITHM])

def _user_from_token(token: str, db: Session) -> Optional[User]:
    try:
        payload = _decode_token(token)
        email = payload.get("sub")
        if not email:
            return None
        return db.query(User).filter(User.email == email).first()
    except JWTError:
        return None

def get_current_user_optional(
    db: Session = Depends(get_db),
    authorization: str | None = Header(None, alias="Authorization"),
) -> Optional[User]:
    """
    Retourne l'utilisateur si un Bearer token valide est présent,
    sinon None (pas d'erreur 401).
    """
    if not authorization or not authorization.lower().startswith("bearer "):
        return None
    token = authorization.split(" ", 1)[1].strip()
    return _user_from_token(token, db)
