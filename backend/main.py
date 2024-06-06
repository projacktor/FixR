from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

# Mount the frontend directory at the root
app.mount("/", StaticFiles(directory="../frontend", html=True), name="frontend")

@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1:8000", port=8000)