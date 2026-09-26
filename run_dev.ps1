# SCRIPT KHỞI CHẠY MÔI TRƯỜNG PHÁT TRIỂN (LOCAL DEV)
# DỰ ÁN: TRỢ LÝ PHÁP LUẬT & TTHC CÔNG AN XÃ ĐỨC HỢP

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "KHỞI ĐỘNG HỆ THỐNG TRỢ LÝ PHÁP LUẬT & TTHC (DEV MODE)" -ForegroundColor Yellow
Write-Host "Đơn vị: CÔNG AN XÃ ĐỨC HỢP, KIM ĐỘNG, HƯNG YÊN" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Khởi động Backend FastAPI
Write-Host "`n[1/2] Đang khởi động Backend FastAPI (Port 8000)..." -ForegroundColor Yellow
$BackendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    $env:PYTHONPATH = "backend"
    $env:PYTHONIOENCODING = "utf-8"
    .\backend\venv\Scripts\python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
}

# 2. Khởi động Frontend Next.js
Write-Host "[2/2] Đang khởi động Frontend Next.js (Port 3000)..." -ForegroundColor Yellow
Set-Location frontend
npm run dev
