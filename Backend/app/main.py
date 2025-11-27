# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.router import api_router

app = FastAPI(title=settings.PROJECT_NAME)

DEV_ORIGINS = [
    "http://localhost:5173",  "http://127.0.0.1:5173",
    "http://localhost:5174",  "http://127.0.0.1:5174",
    "http://localhost:3000",  "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=DEV_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/healthz")
def healthz():
    return {"status": "ok"}

app.include_router(api_router, prefix=settings.API_V1_PREFIX)
