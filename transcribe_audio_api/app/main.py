from fastapi import FastAPI
from endpoints.audio import router as audio_router

app = FastAPI()

app.include_router(audio_router)
