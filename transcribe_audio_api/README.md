# API de Transcrição de Áudio

## Introdução

A API de Transcrição de Áudio permite que você submeta arquivos de áudio e receba respostas geradas em tempo real por inteligência artificial. Para utilizar esta API, é necessário obter uma chave de acesso na plataforma da OpenAI. Caso ainda não possua uma chave, você pode se cadastrar [aqui](https://platform.openai.com/account/api-keys) e gerar uma nova chave.

## Configuração

Após obter a sua chave de acesso, siga os passos abaixo para configurar o projeto:

1. Clone este repositório para o seu ambiente local.

2. Crie um arquivo `.env` na raiz do projeto e adicione a seguinte variável de ambiente, substituindo `valor_key` pela sua chave de acesso:

OPENAI_API_KEY=valor_key

## Executando a API

Você pode escolher entre rodar a API localmente em sua máquina ou utilizando o Docker.

### Rodando localmente:

1. Instale as dependências necessárias executando o seguinte comando:

pip install -r requirements.txt

2. Inicie o servidor local com o seguinte comando:

uvicorn main:app --reload

Agora a API está rodando e pronta para receber requisições.

### Rodando com Docker:

Para executar a API utilizando o Docker, certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

1. Construa a imagem do container executando o seguinte comando:

docker-compose build

2. Inicie o container com o seguinte comando:

docker-compose up

Agora a API está rodando dentro do container Docker.






