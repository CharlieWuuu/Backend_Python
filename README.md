# 🚀 FastAPI 專案啟動指令備忘錄

這是我的 FastAPI 開發流程與環境說明，用來避免久沒碰就忘記指令。

---

## 📁 專案初始化

建議用 `pyenv` + `virtualenv` 建立專屬環境：

```bash
# 建立虛擬環境（只做一次）
pyenv virtualenv 3.11.8 fastapi_env

# 指定本資料夾使用這個環境
pyenv local fastapi_env

uvicorn main:app --reload
# Backend_Python
# Backend_Python
