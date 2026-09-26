from typing import Optional, List, Dict, Any
from datetime import datetime
from pydantic import BaseModel, Field

# Base response
class ApiResponse(BaseModel):
    success: bool = True
    message: str = "Thành công"
    data: Optional[Any] = None

# Category schemas
class CategoryBase(BaseModel):
    code: str
    name: str
    description: Optional[str] = None
    icon: Optional[str] = "Folder"
    order_num: Optional[int] = 0
    is_active: Optional[bool] = True

class CategoryCreate(CategoryBase):
    pass

class CategoryResponse(CategoryBase):
    id: str
    created_at: datetime
    class Config:
        from_attributes = True

# ProcedureForm schemas
class ProcedureFormBase(BaseModel):
    form_code: str
    name: str
    file_url: str
    guide_url: Optional[str] = None

class ProcedureFormResponse(ProcedureFormBase):
    id: str
    procedure_id: str
    created_at: datetime
    class Config:
        from_attributes = True

# Procedure schemas
class ProcedureBase(BaseModel):
    category_id: str
    code: Optional[str] = None
    title: str
    target_audience: Optional[str] = "Công dân Việt Nam"
    competent_authority: Optional[str] = "Công an xã Đức Hợp"
    execution_method: Optional[str] = None
    required_documents: List[str] = Field(default_factory=list)
    steps: List[Dict[str, Any]] = Field(default_factory=list)
    processing_time: Optional[str] = "Trong ngày hoặc 03 ngày làm việc"
    fee: Optional[str] = "Miễn phí hoặc theo quy định"
    online_url: Optional[str] = None
    is_active: Optional[bool] = True

class ProcedureCreate(ProcedureBase):
    pass

class ProcedureResponse(ProcedureBase):
    id: str
    views_count: int = 0
    created_at: datetime
    updated_at: datetime
    forms: List[ProcedureFormResponse] = Field(default_factory=list)
    class Config:
        from_attributes = True

# Article schemas
class ArticleBase(BaseModel):
    category_id: Optional[str] = None
    title: str
    slug: str
    summary: str
    content: str
    image_url: Optional[str] = None
    is_scam_alert: Optional[bool] = False
    scam_tricks: List[str] = Field(default_factory=list)
    prevention_advice: List[str] = Field(default_factory=list)
    is_published: Optional[bool] = True

class ArticleCreate(ArticleBase):
    pass

class ArticleResponse(ArticleBase):
    id: str
    views_count: int = 0
    created_at: datetime
    updated_at: datetime
    class Config:
        from_attributes = True

# Chatbot schemas
class ChatQueryRequest(BaseModel):
    session_id: str
    query: str
    history: Optional[List[Dict[str, str]]] = Field(default_factory=list)

class ChatQueryResponse(BaseModel):
    session_id: str
    answer: str
    sources: List[Dict[str, Any]] = Field(default_factory=list)
    disclaimer: str = "Thông tin mang tính chất hướng dẫn và tham khảo theo quy định của pháp luật. Vui lòng liên hệ trực ban Công an xã Đức Hợp hoặc Cổng DVC Bộ Công an khi nộp hồ sơ chính thức."

class ChatFeedbackRequest(BaseModel):
    session_id: str
    chat_log_id: Optional[str] = None
    rating: int # 1: Hài lòng, -1: Không hài lòng
    comment: Optional[str] = None

# Admin schemas
class AdminLoginRequest(BaseModel):
    username: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: Dict[str, Any]
