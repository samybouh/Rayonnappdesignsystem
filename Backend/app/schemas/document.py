
# app/schemas/document.py
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class DocumentCreate(BaseModel):
    title: str
    kind: str = "note"
    content_text: Optional[str] = None  # pour création de notes
