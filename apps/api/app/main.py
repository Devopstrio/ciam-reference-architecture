import logging
import time
from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware
from prometheus_client import make_asgi_app
from pythonjsonlogger import jsonlogger

# Logger setup
logger = logging.getLogger("ciam-api")
logHandler = logging.StreamHandler()
formatter = jsonlogger.JsonFormatter()
logHandler.setFormatter(formatter)
logger.addHandler(logHandler)
logger.setLevel(logging.INFO)

app = FastAPI(title="CIAM Reference API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Metrics
metrics_app = make_asgi_app()
app.mount("/metrics", metrics_app)

@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    duration = time.time() - start_time
    logger.info(f"Path: {request.url.path} Method: {request.method} Status: {response.status_code} Duration: {duration:.4f}s")
    return response

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.post("/auth/register")
async def register(user_data: dict):
    # Registration logic here
    return {"message": "User registered successfully", "user_id": "usr_123"}

@app.post("/auth/login")
async def login(credentials: dict):
    # Login logic here
    return {"access_token": "mock_jwt_token", "token_type": "bearer"}

@app.get("/profile")
async def get_profile(user_id: str = "usr_123"):
    return {
        "id": user_id,
        "email": "customer@example.com",
        "name": "John Doe",
        "email_verified": True,
        "mfa_enabled": False
    }

@app.get("/consent")
async def get_consent(user_id: str = "usr_123"):
    return {
        "marketing": True,
        "analytics": True,
        "third_party_sharing": False,
        "last_updated": "2026-04-28T10:00:00Z"
    }
