# app/schemas/folder.py
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class FolderCreate(BaseModel):
    name: str
    color: Optional[str] = "#6F3DFF"

class FolderSummary(BaseModel):
    id: int
    name: str
    color: str
    file_count: int
    last_modified: Optional[datetime]
    class Config: from_attributes = True

