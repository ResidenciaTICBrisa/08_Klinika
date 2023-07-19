A busca por interações mais intuitivas e naturais com assistentes virtuais tem impulsionado o desenvolvimento de funcionalidades inovadoras. Nesse contexto, o presente código visa implementar uma solução que permite aos usuários realizar consultas ao chat GPT-4 utilizando comandos de voz. Para alcançar esse objetivo, a linguagem de programação escolhida é o Python, amplamente reconhecida pela sua versatilidade e facilidade de uso. Essa funcionalidade faz uso dos avançados modelos de inteligência artificial Whisper e GPT-4, desenvolvidos e disponibilizados pela OpenAI.

Para a utilização dessa funcionalidade é preciso rodar os seguintes comandos para uso das bibliotecas:

```python
pip install openai
pip install os
pip install pyaudio
pip install wave
pip install load_dotenv
pip install requests
pip install json
```

Inicialmente, é necessário importar as bibliotecas instaladas e em seguida definir a chave de API do OpenAI na variável OPENAI_API_KEY, que é armazenada de forma segura em um arquivo de ambiente (.env). Essa chave é utilizada para autenticar as solicitações à API do OpenAI.

```python
import openai
import os
import pyaudio
import wave
from dotenv import load_dotenv
import requests
import json

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = OPENAI_API_KEY
```

A função record_audio é responsável por gravar o áudio do dispositivo por um determinado período de tempo, utilizando a biblioteca "PyAudio". Os parâmetros como formato de áudio, número de canais, taxa de amostragem e tamanho do "buffer" são configurados nessa função. Veja que o valor padrão para a duração, caso não informada na chamada da função, é 5 segundos.

```python
def record_audio(filename, duration=5):
    FORMAT = pyaudio.paInt16
    CHANNELS = 1
    RATE = 16000
    CHUNK = 1024

    audio = pyaudio.PyAudio()
    stream = audio.open(format=FORMAT, channels=CHANNELS,
                        rate=RATE, input=True,
                        frames_per_buffer=CHUNK)

    print("Recording...")

    frames = []

    for _ in range(0, int(RATE / CHUNK * duration)):
        data = stream.read(CHUNK)
        frames.append(data)

    print("Finished recording")

    stream.stop_stream()
    stream.close()
    audio.terminate()

    with wave.open(filename, 'wb') as wf:
        wf.setnchannels(CHANNELS)
        wf.setsampwidth(audio.get_sample_size(FORMAT))
        wf.setframerate(RATE)
        wf.writeframes(b''.join(frames))
```

Após a gravação do áudio, a função transcribe_audio realiza a transcrição do arquivo de áudio gravado utilizando o modelo de inteligência artificial Whisper da OpenAI. A transcrição resultante é retornada como texto.

```python
def transcribe_audio(filename):
    with open(filename, "rb") as audio_file:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
        return transcript["text"]
```

Em seguida, a função generate_response é utilizada para gerar a resposta do chat GPT-4 com base na pergunta ou comando do usuário. É realizada uma solicitação HTTP POST para a API do OpenAI, fornecendo o modelo GPT-4 e a mensagem do usuário. A resposta obtida é processada e a mensagem de saída é retornada.

```python
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
```

A função principal main coordena a execução do código. Primeiro, o áudio é gravado e salvo em um arquivo chamado "recorded_audio.wav". Em seguida, o áudio é transcrito e impresso na tela para verificação. Posteriormente, a função generate_response é chamada, passando a transcrição como entrada, e a resposta do chat GPT-4 é impressa na tela.

```python
def main():
    audio_filename = "recorded_audio.wav"
    record_audio(audio_filename)
    transcription = transcribe_audio(audio_filename)
    print("Transcription:", transcription)
    response = generate_response(transcription)
    print(response)
if __name__ == "__main__":
    main()
```

Ao executar o código, é possível interagir com o chat GPT-4 através de comandos de voz, fornecendo perguntas ou instruções. O assistente virtual processará o áudio, converterá em texto, enviará a consulta para o modelo GPT-4 e retornará a resposta gerada.

Para mais informações consulte a documentação da [OpenAI](https://platform.openai.com/docs/introduction).
