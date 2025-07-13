from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# 開放 CORS 給前端 Vue 使用
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 模擬使用者資料
FAKE_USER = {
    "username": "Admin@gmail.com",
    "password": "1234!!!"
}

class LoginRequest(BaseModel):
    username: str
    password: str

@app.post("/login")
def login(data: LoginRequest):
    if data.username == FAKE_USER["username"] and data.password == FAKE_USER["password"]:
        return { "message": "登入成功", "token": "fake-jwt-token" }
    raise HTTPException(status_code=401, detail="帳號或密碼錯誤")
