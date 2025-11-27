# app/api/v1/endpoints/folders.py
from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from sqlalchemy.orm import Session
from app.core.security import get_current_user
from app.db.session import get_db
from app.db.models.folders import Folder, Document, DocumentAnalysis
from app.schemas.folder import FolderCreate, FolderSummary
from app.schemas.document import DocumentCreate
from datetime import datetime
import os, shutil

router = APIRouter(prefix="/folders", tags=["folders"])

@router.get("", response_model=list[FolderSummary])
def list_folders(db: Session = Depends(get_db), user=Depends(get_current_user)):
    q = (
        db.query(Folder)
        .filter(Folder.user_id == user.id)
        .all()
    )
    out = []
    for f in q:
        last = None
        if f.documents:
            last = max(d.updated_at or d.created_at for d in f.documents)
        out.append(FolderSummary(
            id=f.id, name=f.name, color=f.color,
            file_count=len(f.documents), last_modified=last
        ))
    return out

@router.post("", response_model=FolderSummary)
def create_folder(payload: FolderCreate, db: Session = Depends(get_db), user=Depends(get_current_user)):
    f = Folder(user_id=user.id, name=payload.name, color=payload.color)
    db.add(f); db.commit(); db.refresh(f)
    return FolderSummary(id=f.id, name=f.name, color=f.color, file_count=0, last_modified=None)

@router.get("/{folder_id}")
def get_folder(folder_id:int, db: Session=Depends(get_db), user=Depends(get_current_user)):
    f = db.query(Folder).filter_by(id=folder_id, user_id=user.id).first()
    if not f: raise HTTPException(404)
    return {
        "id": f.id, "name": f.name, "color": f.color,
        "files": [
            {
              "id": d.id, "title": d.title, "kind": d.kind, "mime": d.mime,
              "updated_at": d.updated_at, "analysis": d.analysis and {
                 "tags": d.analysis.tags, "score": d.analysis.score_effectiveness
              }
            } for d in f.documents
        ]
    }

@router.post("/{folder_id}/documents")
def create_document(folder_id:int, payload:DocumentCreate, db:Session=Depends(get_db), user=Depends(get_current_user)):
    f = db.query(Folder).filter_by(id=folder_id, user_id=user.id).first()
    if not f: raise HTTPException(404)
    d = Document(folder_id=f.id, user_id=user.id, title=payload.title,
                 kind=payload.kind, content_text=payload.content_text)
    db.add(d); db.commit(); db.refresh(d)
    return {"id": d.id, "title": d.title}

@router.post("/{folder_id}/upload")
def upload_file(folder_id:int, upload:UploadFile = File(...), db:Session=Depends(get_db), user=Depends(get_current_user)):
    f = db.query(Folder).filter_by(id=folder_id, user_id=user.id).first()
    if not f: raise HTTPException(404)
    up_dir = os.path.join("var", "uploads", str(user.id), str(folder_id))
    os.makedirs(up_dir, exist_ok=True)
    dest = os.path.join(up_dir, upload.filename)
    with open(dest, "wb") as w: shutil.copyfileobj(upload.file, w)
    d = Document(folder_id=f.id, user_id=user.id, title=upload.filename,
                 kind="file", path=dest, mime=upload.content_type, size=os.path.getsize(dest))
    db.add(d); db.commit(); db.refresh(d)
    return {"id": d.id, "title": d.title}
