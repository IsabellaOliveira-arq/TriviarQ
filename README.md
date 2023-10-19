ESTRUTURAÇÃO DO DESAFIO TRIVIA

OBJETIVO

3 telas, divididas em:
Apresentação
Quiz 
Resultado do quiz

FORMATO DE APRESENTAÇÃO

Utilizar texto de apresentação a Trívia, com espaço para preenchimento do nome do jogador, e um botão de ação para acesso ao quiz.
Quiz
Três perguntas relacionadas a arquitetura, cada uma com 3 opções de resposta, adicionar o radio button em cada uma das alternativas.
Resultado do quiz 
Dividir o resultado em quantidade de erros e acertos, com botão de ação para recomeçar o quiz.
Para dar um aspecto mais dinâmico, unimos a palavra Trívia e Arquitetura, virando o TríviarQ.
Se formos comparar os códigos utilizados a arquitetura, temos o HTML como a fundação, o JS como as paredes e fechamentos, e o CSS como os acabamentos, revestimentos...

SOBRE O CÓDIGO FINAL

O código é dividido em HTML, JS e CSS.


Para dar start ao processo de construção do Triviarq, passamos pela base do site, o HTML, onde para dar se início, usa-se <!DOCTYPE html>, que é o que define o tipo de HTML.
<html>: Abre a tag raiz do documento HTML.
<head>: Aqui começa a seção do cabeçalho da página. Geralmente, informações como metadados, links para arquivos CSS e outros elementos relacionados ao documento são definidos dentro desta seção.
<link rel="stylesheet" type="text/css" href="style.css">: Este elemento <link> é usado para vincular um arquivo CSS externo à página. Ele está referenciando o arquivo "style.css" que será usado para estilizar a página.
</head>: Fecha a seção do cabeçalho.
<body>: Inicia a seção do corpo da página. Tudo o que é exibido na página estará dentro desta seção.
<div id="welcome-screen">: Define uma divisão (div) com o ID "welcome-screen". Este será o primeiro elemento visível na página.
<h1>: Cria um cabeçalho de primeiro nível (Utilizamos o Bem vindo ao TriviarQ).
<p>: Cria um parágrafo.
<input type="text" id="player-name">: Cria uma caixa de entrada de texto com o ID "player-name".
<button onclick="startGame()">: Cria um botão com um evento de clique que chama a função "startGame()".
<img src="https://cdn.glitch.global/403ed8f8-ef31-4aad-8db1-1f27583a5bb5/teste.png?v=1697500454518" alt="logomarca" style="margin-top: 10px; margin-bottom: 20px; margin-left: 3px; margin-right: 15px;">: serviu para inserir a imagem na página com o atributo "src" apontando para uma URL externa. O atributo "alt" fornece um texto alternativo para a imagem que nomeamos como logomarca e o estilo define margens para a imagem.
<div id="game-screen" style="display: none;">: Define uma segunda divisão com o ID "game-screen". Ela é inicialmente oculta (display: none).
As três perguntas (Q.1, Q.2, Q.3) são apresentadas com opções de resposta (A, B, C). <button onclick="submitAnswers()">: Cria um botão que chama a função "submitAnswers()" quando clicado.
<div id="result-screen" style="display: none;">: Define uma terceira divisão com o ID "result-screen". Ela também é inicialmente oculta.
Apresenta o resultado do jogo, incluindo o número de respostas corretas e erradas.
Em seguida inserimos o botão para reiniciar o jogo.
<script src="script.js"></script>: Inclui um arquivo JavaScript externo chamado "script.js" para adicionar funcionalidade à página.
</body>: Fecha a seção do corpo.
</html>: Fecha a tag raiz do documento HTML.
O código HTML cria a página da web com a tela de boas-vindas seguida da tela de jogo com perguntas e as opções de resposta finalizando com a tela de resultados. A interatividade é implementada usando JavaScript no arquivo "script.js".
  
Para continuidade, seguimos com o código JS, como o conteúdo é mais extenso, vamos dividir por partes:
Declaração de Variáveis:
playerName: Uma variável que será usada para armazenar o nome do jogador.
correctAnswers: Uma variável para contar o número de respostas corretas.
wrongAnswers: Uma variável para contar o número de respostas erradas.
correctAnswersArray: Uma matriz (array) que será usada para armazenar as perguntas para as quais o jogador respondeu corretamente.
Função startGame():
Esta função é chamada quando o jogo começa. Ela obtém o nome do jogador a partir de um campo de entrada no documento HTML, capitaliza a primeira letra e exibe o nome na tela. Em seguida, ela altera a visibilidade de duas seções do jogo: a tela de boas-vindas fica invisível ('none') e a tela do jogo fica visível ('block').
Função submitAnswers():
Esta função é chamada quando o jogador submete suas respostas. Ela zera as variáveis correctAnswers, wrongAnswers e correctAnswersArray. Em seguida, chama a função checkAnswer() para verificar as respostas para três perguntas diferentes (Q.1, Q.2, Q.3). Depois, ela exibe a tela de resultados, mostrando o número de respostas corretas e incorretas, bem como uma lista das perguntas respondidas corretamente.
Função checkAnswer(question, correctOption, questionText):
Esta função verifica a resposta para uma pergunta específica. Ela recebe três parâmetros: o nome da pergunta, a opção correta e o texto da pergunta.
Ela obtém as opções de resposta para a pergunta e remove as classes 'correct-answer' e 'wrong-answer' de todas as opções. Ela também redefine a cor de fundo para a cor padrão.
Em seguida, verifica qual opção foi selecionada pelo jogador e compara com a opção correta. Se a resposta for correta, adiciona a classe 'correct-answer' à opção selecionada, atualiza a variável correctAnswers e adiciona a pergunta ao array correctAnswersArray. Se a resposta for errada, adiciona a classe 'wrong-answer' à opção selecionada, muda a cor de fundo para vermelho e exibe um alerta com a resposta correta. A variável wrongAnswers também é atualizada.
Função restartGame():
Esta função reinicia o jogo, zerando as variáveis de respostas corretas, erradas e a matriz correctAnswersArray. Também limpa o campo de entrada de nome do jogador e reconfigura os botões de seleção de resposta para cada pergunta.
Ela redefine a visibilidade das telas de boas-vindas e de resultados.
Função resetRadioButtons(question):
Esta função é usada para desmarcar todos os botões de seleção de resposta para uma pergunta específica. Ela é chamada na função restartGame() para garantir que as respostas selecionadas sejam desmarcadas quando o jogo é reiniciado.
Para fechar o combinado dos três códigos, usamos o CSS
body: Esta seção define o estilo para o elemento <body>, que é o elemento principal de uma página HTML.
font-family: Define a fonte do texto dentro do elemento <body>. Neste caso, a fonte é "Verdana" e, se "Verdana" não estiver disponível, a página usará uma fonte genérica "sans-serif".
text-align: Define a justificação do texto como "left", o que significa que o texto será alinhado à esquerda na página.
background-image: Define uma imagem de fundo para o <body>. A imagem é definida por meio de uma URL.
background-size: Define o tamanho da imagem de fundo como "auto", o que permite que a imagem mantenha seu tamanho original.
background-position: Centraliza a imagem de fundo na página.
background-repeat: Impede que a imagem de fundo seja repetida na página.
background-attachment: Define a imagem de fundo como "fixed", o que significa que a imagem permanecerá fixa na posição enquanto a página é rolada.
#welcome-screen, #game-screen, #result-screen: Essa seção define o estilo para os elementos com os IDs "welcome-screen," "game-screen," e "result-screen." Eles têm uma margem de 10px ao redor deles.
input[type="text"], input[type="radio"]: Estiliza os elementos de entrada de texto e botões de rádio. Eles têm uma margem de 1px ao redor deles.
button: Define o estilo para botões. Eles têm uma margem de 3px, um preenchimento interno de 7px no topo e na base e 15px nos lados, uma cor de fundo, uma cor de texto branca, nenhum contorno (border), bordas arredondadas (border-radius), um cursor de apontar (pointer), e uma duração de transição de 0.4 segundos para efeito hover.
button:hover: Define o estilo do botão quando o mouse passa por cima dele. Nesse caso, a cor de fundo muda quando o botão é hover.
button:disabled: Define o estilo do botão quando está desabilitado (disabled). A cor de fundo se torna vermelha e o cursor se torna "not-allowed," indicando que o botão não pode ser clicado.
.answer-option: Define o estilo para elementos com a classe "answer-option". Eles têm uma cor de fundo, preenchimento interno e margem para criar espaçamento entre as opções de resposta.
.correct-answer: Define o estilo para elementos com a classe "correct-answer". Eles têm uma cor de fundo verde e texto branco.
.wrong-answer: Define o estilo para elementos com a classe "wrong-answer". Eles têm uma cor de fundo vermelha e texto branco.
.correct-answer-background: Define o estilo para elementos com a classe "correct-answer-background". Eles têm uma cor de fundo verde.
As regras CSS são aplicadas aos elementos HTML com base em suas classes e IDs, permitindo personalizar a aparência da página da web.

  
# Estruturação do Desafio TriviarQ

## Objetivo

O objetivo deste desafio é criar um jogo de trivia sobre arquitetura com três telas distintas: Apresentação, Quiz e Resultado do quiz.

## Formato de Apresentação

- Apresentação: Utilize um texto de apresentação para o TriviarQ, incluindo um espaço para o jogador inserir seu nome e um botão para iniciar o quiz.
- Quiz: Crie três perguntas relacionadas à arquitetura, cada uma com três opções de resposta, com botões de radio para selecionar a resposta.
- Resultado do quiz: Apresente o resultado com a contagem de respostas corretas e incorretas, e um botão para recomeçar o quiz.

## Sobre o Código Final

O código é dividido em três partes: HTML, JS e CSS.

### HTML

## Try this next 🏗️

Take a look in `TODO.md` for next steps you can try out in your new site!

___Want a minimal version of this project to build your own website? Check out [Blank Website](https://glitch.com/edit/#!/remix/glitch-blank-website)!___

## Ready to share your site?

Add these meta tags for SEO and social sharing between your page `<head></head>` tags, changing the values for your site:

```
<link rel="canonical" href="https://glitch-hello-website.glitch.me/" />
<meta name="description" content="A simple website, built with Glitch. Remix it to get your own."/>
<meta name="robots" content="index,follow" />
<meta property="og:title" content="Hello World!" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://glitch-hello-website.glitch.me/" />
<meta property="og:description" content="A simple website, built with Glitch. Remix it to get your own."/>
<meta property="og:image" content="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2Fhello-website-social.png?v=1616712748147"/>
<meta name="twitter:card" content="summary" />
```

![Glitch](https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576)

