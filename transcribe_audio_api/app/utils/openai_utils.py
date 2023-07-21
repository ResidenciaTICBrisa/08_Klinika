import os
from dotenv import load_dotenv
import openai
import requests

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = OPENAI_API_KEY

def transcribe_audio(filename):
    with open(filename, "rb") as audio_file:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
        return transcript["text"]

def generate_response(question):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {OPENAI_API_KEY}"
    }
  
    data = {
        "model": "gpt-4",
        "messages": [{"role": "user", "content": f"{question}"}],
        "temperature": 0.7
    }
  
    response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=data)
  
    result = response.json()
  
    return result["choices"][0]["message"]["content"]
