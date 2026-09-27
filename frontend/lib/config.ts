export const BACKEND_URL =
  process.env.BACKEND_API_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://chatbot-tuyen-truyen-duc-hop.onrender.com'
    : 'http://127.0.0.1:8000');
