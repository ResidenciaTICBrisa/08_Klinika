from fastapi import APIRouter, UploadFile, File
from utils.openai_utils import transcribe_audio, generate_response

router = APIRouter()

@router.post("/upload/audio/")
async def upload_audio(audio_file: UploadFile = File(...)):
    # Salvar o arquivo temporariamente para obter o nome do arquivo
    with open(audio_file.filename, "wb") as f:
        f.write(audio_file.file.read())

    # Chamar a função de transcrição
    transcript = transcribe_audio(audio_file.filename)
    
    response = generate_response(transcript)
    
    return {"transcript": response}
