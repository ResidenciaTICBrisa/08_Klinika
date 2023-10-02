from fastapi import APIRouter, Request, UploadFile, File, Form
from utils.openai_utils import transcribe_audio, generate_response
from fastapi.responses import StreamingResponse
import os

router = APIRouter()

@router.post("/message/")
async def upload_audio(audio_file: UploadFile = File(...)):
    with open(audio_file.filename, "wb") as f:
        f.write(audio_file.file.read())

    transcript = transcribe_audio(audio_file.filename)
    os.remove(audio_file.filename)
    
    return {"message": transcript}



@router.post("/upload/audio/")
async def upload_audio(audio_file: UploadFile = File(...), model: str = Form(...)):

    with open(audio_file.filename, "wb") as f:
        f.write(audio_file.file.read())

    transcript = transcribe_audio(audio_file.filename)
    os.remove(audio_file.filename)
    
    return StreamingResponse(generate_response(transcript, model), media_type='text/event-stream')

@router.post("/upload/text/")
async def upload_text(request: Request):
    data = await request.json()
    question = data.get("text", "")
    model = data.get("model", "")
    return StreamingResponse(generate_response(question, model), media_type='text/event-stream')
