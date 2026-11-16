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
    session_id: Optional[str] = "default_session"
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

# Thống kê lượt truy cập (Site Visits)
class SiteVisitCreate(BaseModel):
    page_path: str
    page_title: Optional[str] = None
    referrer: Optional[str] = None
    device_type: Optional[str] = "desktop"
    visitor_hash: Optional[str] = None

class SiteVisitResponse(BaseModel):
    id: str
    page_path: str
    page_title: Optional[str] = None
    referrer: Optional[str] = None
    device_type: str
    created_at: datetime
    class Config:
        from_attributes = True

class TrafficStatsResponse(BaseModel):
    total_visits: int
    today_visits: int
    unique_visitors: int
    mobile_percentage: float
    visits_last_7_days: List[Dict[str, Any]]
    top_pages: List[Dict[str, Any]]
    device_breakdown: Dict[str, int]
    source_breakdown: Dict[str, int]

# Đánh giá trang web (Website Review & Ratings)
class WebsiteReviewCreate(BaseModel):
    rating: int = Field(ge=1, le=5, description="Số sao từ 1 đến 5")
    category: Optional[str] = "Toàn diện trang web"
    comment: str
    citizen_name: Optional[str] = "Công dân xã Đức Hợp"
    citizen_phone: Optional[str] = None

class WebsiteReviewReply(BaseModel):
    admin_reply: str

class WebsiteReviewResponse(BaseModel):
    id: str
    rating: int
    category: str
    comment: str
    citizen_name: str
    is_approved: bool
    admin_reply: Optional[str] = None
    replied_at: Optional[datetime] = None
    created_at: datetime
    class Config:
        from_attributes = True

class WebsiteReviewSummary(BaseModel):
    average_rating: float
    total_reviews: int
    satisfaction_rate: float
    star_breakdown: Dict[int, int]
    category_breakdown: Dict[str, int]
    recent_reviews: List[WebsiteReviewResponse]
