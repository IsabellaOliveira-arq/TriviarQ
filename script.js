let playerName;
let correctAnswers = 0;
let wrongAnswers = 0;
let correctAnswersArray = []; // Changed from const to let

function startGame() {
    let playerName = document.getElementById('player-name').value.trim(); // Added parentheses after value.trim

    if (playerName === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    let capitalize_playerName = playerName[0].toUpperCase() + playerName.substring(1).toLowerCase();
    document.getElementById('player-name-display').textContent = capitalize_playerName;
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block'; // Fixed the missing dot after style
}

function submitAnswers() {
    correctAnswers = 0;
    wrongAnswers = 0;
    correctAnswersArray = []; // Limpa o array de respostas corretas

    checkAnswer("q1", "A", "Q.1");
    checkAnswer("q2", "C", "Q.2");
    checkAnswer("q3", "B", "Q.3");

    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';

    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
  
      // Exibe as respostas corretas no final
    const correctAnswersList = document.getElementById('correct-answers-list');
    correctAnswersArray.forEach(question => {
        const listItem = document.createElement('li');
        listItem.textContent = question;
        correctAnswersList.appendChild(listItem);
    });
}

function checkAnswer(question, correctOption, questionText) {
  const options = document.querySelectorAll('input[name="' + question + '"]');

  // Remover as classes 'correct-answer' e 'wrong-answer' de todas as opções
  options.forEach(option => {
    option.nextElementSibling.classList.remove('correct-answer', 'wrong-answer');
    option.nextElementSibling.style.backgroundColor = ''; // Reset background color
  });

  const selectedOption = document.querySelector('input[name="' + question + '"]:checked');

  if (selectedOption) {
    console.log (selectedOption.value , correctOption) 
    if (selectedOption.value === correctOption) {
      selectedOption.nextElementSibling.classList.add('correct-answer'); // Resposta correta (aplica classe 'correct-answer');
      correctAnswersArray.push(questionText);
      correctAnswers++;

    } else {
      selectedOption.nextElementSibling.classList.add('wrong-answer'); // Resposta errada (aplica classe 'wrong-answer')
      selectedOption.nextElementSibling.style.backgroundColor = 'red'; // Red background for wrong answer
      alert('Resposta incorreta para a pergunta: ' + questionText + '\nA resposta correta é: ' + correctOption);
      wrongAnswers++;
    }
  } else {
    alert('Por favor, selecione uma resposta.');
  }
}

function restartGame() {
    correctAnswers = 0;
    wrongAnswers = 0;
    correctAnswersArray.length = 0; // Limpa o array de respostas corretas
    document.getElementById("player-name").value = "";

    // Reset the radio buttons for each question
    resetRadioButtons("q1");
    resetRadioButtons("q2");
    resetRadioButtons("q3");
  
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
  
function resetRadioButtons(question) {
    const options = document.querySelectorAll('input[name="' + question + '"]');
    options.forEach(option => {
     option.checked = false; // Uncheck the radio button
    });
} resetRadioButtons();
  
}