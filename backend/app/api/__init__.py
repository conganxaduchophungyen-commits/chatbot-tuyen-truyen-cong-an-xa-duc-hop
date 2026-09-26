from fastapi import APIRouter
from app.api.categories import router as categories_router
from app.api.procedures import router as procedures_router
from app.api.articles import router as articles_router
from app.api.chat import router as chat_router
from app.api.auth import router as auth_router

api_router = APIRouter()
api_router.include_router(categories_router)
api_router.include_router(procedures_router)
api_router.include_router(articles_router)
api_router.include_router(chat_router)
api_router.include_router(auth_router)
