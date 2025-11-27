from pydantic_settings import BaseSettings
from pydantic import AnyHttpUrl, field_validator
from typing import List, Union

class Settings(BaseSettings):
    PROJECT_NAME: str = "RayOnn API"
    API_V1_PREFIX: str = "/api/v1"
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # MySQL par défaut
    DB_HOST: str = "127.0.0.1"
    DB_PORT: int = 3306
    DB_USER: str = "rayonn"
    DB_PASSWORD: str = "rayonnpassword"
    DB_NAME: str = "rayonn"

    # Si défini, on l’utilise tel quel (ex: sqlite:///./app.db)
    DB_URL: str | None = None

    CORS_ORIGINS: Union[List[AnyHttpUrl], str] = []

    FIRST_SUPERUSER_EMAIL: str | None = None
    FIRST_SUPERUSER_PASSWORD: str | None = None

    @property
    def SQLALCHEMY_DATABASE_URI(self) -> str:
        if self.DB_URL:
            return self.DB_URL
        return f"mysql+pymysql://{self.DB_USER}:{self.DB_PASSWORD}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}?charset=utf8mb4"

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def assemble_cors(cls, v):
        if v is None:
            return []
        if isinstance(v, str):
            v = v.strip()
            if not v:
                return []
            if v.startswith("["):  # JSON
                import json
                return json.loads(v)
            # "a,b,c"
            return [x.strip() for x in v.split(",") if x.strip()]
        return v

    model_config = {
        "env_file": ".env",
        "case_sensitive": False,
    }

settings = Settings()
