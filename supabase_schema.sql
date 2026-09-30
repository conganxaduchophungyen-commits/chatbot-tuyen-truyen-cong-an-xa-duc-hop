-- ==============================================================================
-- CÔNG AN XÃ ĐỨC HỢP, TỈNH HƯNG YÊN - SUPABASE DATABASE SCHEMA
-- Hỗ trợ PostgreSQL 15+ trên Supabase
-- ==============================================================================

-- 1. Bảng Quản trị viên (admin_users)
CREATE TABLE IF NOT EXISTS admin_users (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    badge_number VARCHAR(50),
    role VARCHAR(50) DEFAULT 'officer',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- 2. Bảng Danh mục nghiệp vụ (categories)
CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(36) PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(100) DEFAULT 'Folder',
    order_num INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- 3. Bảng Thủ tục hành chính (procedures)
CREATE TABLE IF NOT EXISTS procedures (
    id VARCHAR(36) PRIMARY KEY,
    category_id VARCHAR(36) NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    code VARCHAR(100),
    title VARCHAR(500) NOT NULL,
    target_audience VARCHAR(255) DEFAULT 'Công dân Việt Nam',
    competent_authority VARCHAR(255) DEFAULT 'Công an xã Đức Hợp',
    execution_method TEXT,
    required_documents JSON DEFAULT '[]'::json,
    steps JSON DEFAULT '[]'::json,
    processing_time VARCHAR(100) DEFAULT 'Trong ngày hoặc 03 ngày làm việc',
    fee VARCHAR(255) DEFAULT 'Miễn phí hoặc theo quy định',
    online_url VARCHAR(1000),
    is_active BOOLEAN DEFAULT TRUE,
    views_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- 4. Bảng Biểu mẫu thủ tục (procedure_forms)
CREATE TABLE IF NOT EXISTS procedure_forms (
    id VARCHAR(36) PRIMARY KEY,
    procedure_id VARCHAR(36) NOT NULL REFERENCES procedures(id) ON DELETE CASCADE,
    form_code VARCHAR(100) NOT NULL,
    name VARCHAR(500) NOT NULL,
    file_url VARCHAR(1000) NOT NULL,
    guide_url VARCHAR(1000),
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- 5. Bảng Tin bài & Cảnh báo lừa đảo (articles)
CREATE TABLE IF NOT EXISTS articles (
    id VARCHAR(36) PRIMARY KEY,
    category_id VARCHAR(36) REFERENCES categories(id) ON DELETE SET NULL,
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url VARCHAR(1000),
    is_scam_alert BOOLEAN DEFAULT FALSE,
    scam_tricks JSON DEFAULT '[]'::json,
    prevention_advice JSON DEFAULT '[]'::json,
    is_published BOOLEAN DEFAULT TRUE,
    views_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- 6. Bảng Phân đoạn tri thức RAG (knowledge_chunks)
CREATE TABLE IF NOT EXISTS knowledge_chunks (
    id VARCHAR(36) PRIMARY KEY,
    source_title VARCHAR(500) NOT NULL,
    source_type VARCHAR(50) DEFAULT 'law',
    source_id VARCHAR(36),
    chunk_text TEXT NOT NULL,
    metadata_json JSON DEFAULT '{}'::json,
    embedding_json JSON,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- 7. Bảng Nhật ký hỏi đáp Chatbot (chat_logs)
CREATE TABLE IF NOT EXISTS chat_logs (
    id VARCHAR(36) PRIMARY KEY,
    session_id VARCHAR(100) NOT NULL,
    user_query TEXT NOT NULL,
    ai_response TEXT NOT NULL,
    sources_cited JSON DEFAULT '[]'::json,
    feedback_rating INTEGER,
    feedback_comment TEXT,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- Tạo Index tăng tốc truy vấn
CREATE INDEX IF NOT EXISTS idx_categories_code ON categories(code);
CREATE INDEX IF NOT EXISTS idx_procedures_category ON procedures(category_id);
CREATE INDEX IF NOT EXISTS idx_procedures_code ON procedures(code);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_scam ON articles(is_scam_alert);
CREATE INDEX IF NOT EXISTS idx_chat_logs_session ON chat_logs(session_id);

-- Dữ liệu ban đầu (Seed Data)
INSERT INTO categories (id, code, name, description, icon, order_num, is_active)
VALUES
    ('cat_01', 'cu_tru', 'Cư trú & Căn cước VNeID', 'Thủ tục đăng ký thường trú, tạm trú, cấp thẻ Căn cước và tài khoản định danh điện tử', 'UserCheck', 1, true),
    ('cat_02', 'giao_thong', 'Giao thông & Đăng ký xe', 'Thủ tục đăng ký, cấp biển số xe mô tô, xe máy cấp xã; nộp phạt giao thông trực tuyến', 'Bike', 2, true),
    ('cat_03', 'pccc', 'Phòng cháy chữa cháy (PCCC)', 'Hướng dẫn an toàn PCCC hộ gia đình, nhà ở kết hợp sản xuất kinh doanh tại địa phương', 'Flame', 3, true),
    ('cat_04', 'canh_bao', 'Cảnh báo Tội phạm & Lừa đảo', 'Tuyên truyền nhận diện các thủ đoạn tội phạm công nghệ cao và lừa đảo chiếm đoạt tài sản', 'ShieldAlert', 4, true)
ON CONFLICT (code) DO NOTHING;

-- Tài khoản quản trị viên mặc định (mật khẩu mặc định: CongAnDucHop@2026 / admin123)
INSERT INTO admin_users (id, username, password_hash, full_name, badge_number, role, is_active)
VALUES
    ('admin_01', 'admin_duchop', '$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'Cán bộ Quản trị Công an xã Đức Hợp', 'CA-DH-01', 'admin', true),
    ('admin_02', 'admin', '$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'Quản trị viên Công an xã Đức Hợp', 'CA-DH-02', 'admin', true)
ON CONFLICT (username) DO NOTHING;
