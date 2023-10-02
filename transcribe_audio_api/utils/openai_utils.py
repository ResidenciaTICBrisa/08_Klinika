import os
from dotenv import load_dotenv
import openai
import time

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = OPENAI_API_KEY

def transcribe_audio(filename):
    with open(filename, "rb") as audio_file:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
        return transcript["text"]

def generate_response(question, model):
    openai_stream = openai.ChatCompletion.create(
            model=f"{model}",
            messages=[{"role": "user", "content": f"{question}"}],
            temperature=0.0,
            stream=True,
        )
        
    for line in openai_stream:
            completion_reason = line["choices"][0]["finish_reason"]
            if "content" in line["choices"][0].delta:
                current_response = line["choices"][0].delta.content
                yield current_response
                time.sleep(0.25)
