# Atas de reuniões
As atas de reunião são registros escritos que documentam os principais pontos discutidos, decisões tomadas, ações definidas e participantes presentes durante uma reunião. Elas servem como um documento de referência e comunicação, capturando os detalhes importantes da discussão e fornecendo um histórico claro do que foi abordado e acordado durante a reunião.aedasdasdasdasdasd

## Dia: 09/08/2023
#### Participantes: Pedro Augusto, Pedro Henrique, Ana Luiza, Samuel, Vera e Daniel
#### O que foi discutido: 
Daniel realizou a apresentação da Open Health Imaging Foundation, uma biblioteca voltada para a visualização de imagens DICOM utilizadas em exames médicos. Essa biblioteca tem a capacidade de ser integrada à plataforma web da Klinika, permitindo que os médicos visualizem as imagens diretamente na plataforma, eliminando a necessidade de softwares adicionais.
Durante a apresentação, foi demonstrado o estado atual do sistema de prontuários, evidenciando problemas relacionados às requisições para diversas ações, o que resulta em uma lentidão perceptível.
Além disso, foram compartilhados os avanços da semana passada e os itens que ainda estão pendentes. Um destaque foi a ênfase nas telas do painel administrativo da Klinika, que constituíram a principal área de foco ao longo da semana.

## Dia: 14/08/2023
#### Participantes: Pedro Augusto, Pedro Henrique, Ana Luiza, Samuel e Daniel
#### O que foi discutido: 
Foram discutidas as entregas realizadas ao longo da semana e o feedback correspondente fornecido por Daniel. Em relação à página de exames físicos, foi identificada a necessidade de alterar os nomes dos arquivos para manter a consistência com o padrão em inglês adotado para os demais elementos. Nas outras telas apresentadas, incluindo convites de acesso, listagem de medicamentos e procedimentos médicos (TUSS), foram discutidas possíveis melhorias.
Especificamente na tela de medicamentos, foi observado um equívoco relacionado a um link que direciona os usuários para a página da ANVISA referente ao medicamento em questão. Houve uma alteração na sintaxe do link por parte do site da ANVISA, o que impactou a funcionalidade.
Durante a reunião, também foi abordado o tópico da biblioteca OHIF e foram exploradas as perspectivas de conduzir testes da plataforma com médicos reais.

## Dia: 18/08/2023
#### Participantes: Pedro Augusto, Pedro Henrique, Ana Luiza e Daniel
#### O que foi discutido: 
Inicialmente, foram esclarecidas dúvidas relacionadas à página de medicamentos no painel administrativo do Klinika. Essas dúvidas diziam respeito aos dados dos medicamentos obtidos a partir do site gov.br/anvisa, que são disponibilizados por meio de uma tabela em formato xls.
Durante a discussão, Daniel abordou o uso do Redux, enfatizando que, embora possa se tornar mais complexo, não é necessária uma mudança nesse aspecto.
A apresentação prosseguiu com a exibição da interface do módulo de inteligência artificial da plataforma Klinika Web. O feedback recebido concentrou-se na estilização da página, destacando a importância de harmonizá-la visualmente com o restante da plataforma e de adotar uma estrutura semelhante à do ChatGPT.
Além disso, foi compartilhado o documento fornecido pela Sociedade Brasileira de Informática em Saúde, que elenca os requisitos essenciais para a plataforma.
Durante as discussões, também foi explorada a viabilidade de integrar um servidor DICOM à plataforma, visando a inclusão do visualizador de imagens OHIF na interface web.
Por fim, foi apresentada a página relacionada à CID-10 dentro do contexto do Klinika.

## Dia: 21/08/2023
#### Participantes: Pedro Augusto, Pedro Henrique, Samuel, Ana Luiza e Daniel
#### O que foi discutido: 
Inicialmente, elaborou-se um mapa mental utilizando o aplicativo Miro para esclarecer o funcionamento do processo de login e autenticação na plataforma. A autenticação é executada por meio da tecnologia Firebase, enquanto o refresh token é gerenciado pela API Klinika. Além disso, foram abordadas as perspectivas de integrar funcionalidades interativas na plataforma, bem como implementar o uso do Socket.IO, Redis e Pusher para aprimorar a interatividade e armazenamento em cache.

Durante as discussões, também foi mencionada a existência da documentação do projeto, que os estagiários estão elaborando para facilitar o acompanhamento do progresso pela equipe da BRISA. Surgiu um diálogo sobre a viabilidade de tornar os repositórios da Klinika acessíveis, visando a maior transparência em relação aos dados e processos.

Adicionalmente, ficou acordado que Daniel será responsável por entrar em contato com os representantes da Universidade de Brasília (UnB) ou da BRISA, a fim de fortalecer a comunicação e colaboração entre as partes envolvidas.
## Dia: 23/08/2023
#### Participantes: Pedro Henrique, Ana Luiza e Daniel
#### O que foi discutido: 
Inicialmente, Daniel apresentou a tela inicial que havia desenvolvido para a página do médico no ambiente web do Klinika. Logo em seguida, exibiu uma série de protótipos no Miro, com o intuito de captar inspirações para o estilo das páginas.
Além disso, foram tratados alguns problemas de dimensionamento das telas que surgiram devido ao uso do Tailwind CSS, sendo essa uma questão que está em processo de resolução.
No decorrer da reunião, houve uma demonstração dos progressos na implementação da tela de inteligência artificial, a qual segue a estrutura da página do ChatGPT, buscando consistência no design.
Foi abordada também a evolução na tela de cadastro de pacientes, incluindo a discussão sobre quais campos são pertinentes e quais não são, visando otimizar a experiência do usuário e a relevância das informações coletadas.