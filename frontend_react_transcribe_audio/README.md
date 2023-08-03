# Frontend em React para Consumo da API de Transcrição de Áudio

Este repositório contém um exemplo de frontend desenvolvido com Vite e React, que demonstra como consumir a API de Transcrição de Áudio para obter respostas dinâmicas geradas pelo servidor.

## Configuração e Execução

Siga os passos abaixo para rodar o projeto localmente em sua máquina:

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone este repositório para o seu ambiente local.

3. No diretório do projeto, execute os seguintes comandos em sequência:

npm install
npm start

O projeto será iniciado e você poderá visualizar a aplicação em execução no seu navegador.

## Funcionamento

O frontend consome a API de Transcrição de Áudio para obter respostas dinâmicas geradas por inteligência artificial. Ao interagir com a aplicação, você poderá fazer perguntas no campo de texto e enviá-las ou pressionando o botão com o ícone de microfone apenas uma vez para fazer uma pergunta por comando de voz. O frontend é capaz de reconhecer automaticamente o início e o término da sua fala, fazendo a requisição à API após o termino da fala. A resposta do servidor será construída e exibida instantaneamente em seu navegador web.

## Aviso

**Importante:** Antes de executar o projeto, verifique e ajuste a URL do servidor local ou do servidor em um container Docker no componente `src > components > AudioUpload`. Isso garantirá que o frontend se comunique corretamente com a API de Transcrição de Áudio.
