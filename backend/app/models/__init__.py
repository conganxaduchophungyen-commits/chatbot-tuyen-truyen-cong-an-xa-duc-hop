import uuid
from datetime import datetime
from sqlalchemy import Column, String, Text, Boolean, Integer, DateTime, ForeignKey, JSON
from sqlalchemy.orm import relationship
from app.core.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class Category(Base):
    __tablename__ = "categories"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    code = Column(String(50), unique=True, index=True, nullable=False)
    name = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    icon = Column(String(100), default="Folder")
    order_num = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    procedures = relationship("Procedure", back_populates="category", cascade="all, delete-orphan")
    articles = relationship("Article", back_populates="category", cascade="all, delete-orphan")

class Procedure(Base):
    __tablename__ = "procedures"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    category_id = Column(String(36), ForeignKey("categories.id"), nullable=False)
    code = Column(String(100), index=True, nullable=True) # Mã TTHC Bộ Công an
    title = Column(String(500), index=True, nullable=False)
    target_audience = Column(String(255), default="Công dân Việt Nam")
    competent_authority = Column(String(255), default="Công an xã Đức Hợp")
    execution_method = Column(Text, nullable=True) # Trực tiếp hoặc Trực tuyến
    required_documents = Column(JSON, default=list) # Danh sách giấy tờ cần mang
    steps = Column(JSON, default=list) # Trình tự các bước thực hiện
    processing_time = Column(String(100), default="Trong ngày hoặc 03 ngày làm việc")
    fee = Column(String(255), default="Miễn phí hoặc theo quy định")
    online_url = Column(String(1000), nullable=True) # Link Cổng DVC
    is_active = Column(Boolean, default=True)
    views_count = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    category = relationship("Category", back_populates="procedures")
    forms = relationship("ProcedureForm", back_populates="procedure", cascade="all, delete-orphan")

class ProcedureForm(Base):
    __tablename__ = "procedure_forms"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    procedure_id = Column(String(36), ForeignKey("procedures.id"), nullable=False)
    form_code = Column(String(100), nullable=False) # Mẫu CT01, Mẫu ĐK xe...
    name = Column(String(500), nullable=False)
    file_url = Column(String(1000), nullable=False)
    guide_url = Column(String(1000), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    procedure = relationship("Procedure", back_populates="forms")

class Article(Base):
    __tablename__ = "articles"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    category_id = Column(String(36), ForeignKey("categories.id"), nullable=True)
    title = Column(String(500), nullable=False)
    slug = Column(String(500), unique=True, index=True, nullable=False)
    summary = Column(Text, nullable=False)
    content = Column(Text, nullable=False)
    image_url = Column(String(1000), nullable=True)
    is_scam_alert = Column(Boolean, default=False, index=True) # Đánh dấu cảnh báo thủ đoạn lừa đảo
    scam_tricks = Column(JSON, default=list) # Các dấu hiệu nhận biết
    prevention_advice = Column(JSON, default=list) # Biện pháp phòng tránh
    is_published = Column(Boolean, default=True)
    views_count = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    category = relationship("Category", back_populates="articles")

class KnowledgeChunk(Base):
    __tablename__ = "knowledge_chunks"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    source_title = Column(String(500), nullable=False)
    source_type = Column(String(50), default="law") # law | procedure | scam_alert | faq
    source_id = Column(String(36), nullable=True)
    chunk_text = Column(Text, nullable=False)
    metadata_json = Column(JSON, default=dict) # Các metadata: điều khoản, chương mục, tags
    embedding_json = Column(JSON, nullable=True) # Lưu trữ vector dạng JSON array (tương thích cả SQLite và Postgres)
    created_at = Column(DateTime, default=datetime.utcnow)

class ChatLog(Base):
    __tablename__ = "chat_logs"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    session_id = Column(String(100), index=True, nullable=False)
    user_query = Column(Text, nullable=False)
    ai_response = Column(Text, nullable=False)
    sources_cited = Column(JSON, default=list)
    feedback_rating = Column(Integer, nullable=True) # 1: Hài lòng, -1: Chưa rõ/Không hài lòng
    feedback_comment = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class AdminUser(Base):
    __tablename__ = "admin_users"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    username = Column(String(100), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    full_name = Column(String(255), nullable=False)
    badge_number = Column(String(50), nullable=True) # Số hiệu CAND nếu có
    role = Column(String(50), default="officer") # officer | admin
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
