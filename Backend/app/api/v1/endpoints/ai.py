# app/api/v1/endpoints/ai.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.security import get_current_user
from app.db.models.folders import Document, DocumentAnalysis

ai_router = APIRouter(prefix="/ai", tags=["ai"])

@ai_router.post("/documents/{doc_id}/analyze")
def analyze_document(doc_id:int, db:Session=Depends(get_db), user=Depends(get_current_user)):
    d = db.query(Document).filter_by(id=doc_id, user_id=user.id).first()
    if not d: raise HTTPException(404)
    # —— Stub heuristique (remplace par ton LLM quand tu veux)
    text = (d.content_text or d.title or "").lower()
    tags = []
    if any(k in text for k in ["feynman","flashcards","question", "active recall"]): tags.append("Active Recall")
    if any(k in text for k in ["pomodoro","25 min","timer"]): tags.append("Pomodoro")
    score = 60 + 20*("active" in "".join(tags).lower())  # fake scoring
    ana = DocumentAnalysis(document_id=d.id, tags=tags, summary=text[:300],
                           method_detected=tags[0] if tags else None,
                           score_effectiveness=round(min(score, 95),1),
                           reading_time_s=max(30, int(len(text)/8)))
    db.merge(ana); db.commit()
    return {"ok": True, "analysis_id": ana.id}
