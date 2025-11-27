# app/db/models/folders.py
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text, Float
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.mysql import JSON
from datetime import datetime
from app.db.base import Base

class Folder(Base):
    __tablename__ = "folders"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, index=True, nullable=False)
    name = Column(String(200), nullable=False)
    color = Column(String(16), default="#6F3DFF")
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    documents = relationship("Document", back_populates="folder", cascade="all, delete")

class Document(Base):
    __tablename__ = "documents"
    id = Column(Integer, primary_key=True)
    folder_id = Column(Integer, ForeignKey("folders.id"), nullable=False, index=True)
    user_id = Column(Integer, index=True, nullable=False)
    title = Column(String(255), nullable=False)
    kind = Column(String(32), default="note")  # note | file | url
    path = Column(String(512), nullable=True)  # fichier stocké (si upload)
    mime = Column(String(128), nullable=True)
    size = Column(Integer, nullable=True)
    content_text = Column(Text, nullable=True)  # texte extrait (si note/pdf)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    folder = relationship("Folder", back_populates="documents")
    analysis = relationship("DocumentAnalysis", uselist=False, back_populates="document",
                            cascade="all, delete")

class DocumentAnalysis(Base):
    __tablename__ = "document_analyses"
    id = Column(Integer, primary_key=True)
    document_id = Column(Integer, ForeignKey("documents.id"), unique=True)
    tags = Column(JSON, default=[])
    summary = Column(Text, nullable=True)
    method_detected = Column(String(64), nullable=True)
    score_effectiveness = Column(Float, default=0.0)  # 0..100
    reading_time_s = Column(Integer, default=0)
    document = relationship("Document", back_populates="analysis")
