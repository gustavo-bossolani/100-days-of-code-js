const questions = [
  {
    question: 'Qual o maior continente do mundo?',
    options: [
      { label: 'Ásia', correct: true },
      { label: 'America do Sul', correct: false },
      { label: 'Oceania', correct: false },
      { label: 'America do Norte', correct: false },
      { label: 'Europa', correct: false },
    ]
  },
  {
    question: 'Qual o maior mamifero do mundo?',
    options: [
      { label: 'Baleia', correct: true },
      { label: 'Elefante', correct: false },
      { label: 'Girafa', correct: false },
      { label: 'Hipopótamo', correct: false },
      { label: 'Gorila', correct: false },
    ]
  },
  {
    question: 'Em que ano aconteceu o 11 de setembro?',
    options: [
      { label: '2001', correct: true },
      { label: '2011', correct: false },
      { label: '1999', correct: false },
      { label: '2013', correct: false },
      { label: '2000', correct: false },
    ]
  },
  {
    question: 'Qual elemento não faz parte da tabela periodica?',
    options: [
      { label: 'H2O', correct: true },
      { label: 'Mg', correct: false },
      { label: 'Na', correct: false },
      { label: 'Sc', correct: false },
      { label: 'H', correct: false },
    ]
  },
  {
    question: 'Quais são as cores secundárias?',
    options: [
      { label: 'Laranja, Verde e Roxo', correct: true },
      { label: 'Vermelho, Amarelo e Azul', correct: false },
      { label: 'Branco, Preto e Vermelho', correct: false },
      { label: 'Roxo, Lilás e Azul', correct: false },
      { label: 'Amarelo, Azul, Roxo e Vermelho', correct: false },
    ]
  },

];

const quiz = document.querySelector('.quiz');
const scoreSection = document.querySelector('.score');
const startButton = document.querySelector('#start');
const nextButton = document.querySelector('#next-question');
const timer = document.querySelector('#timer');

let score = 0;
let step = 1;

const shuffle = () => {
  questions.sort(() => Math.random() - 0.5);

  questions.forEach(
    item => item.options.sort(() => Math.random() - 0.5)
  );
};

const removeOptions = () => {
  const container = document.querySelector('.question-container');
  if (container) quiz.removeChild(container);
};

const createQuestionTitle = (question) => {
  const title = document.querySelector('.quiz p#question');
  if (title) {
    title.innerText = question;
  } else {
    const pQuestion = document.createElement('p');
    pQuestion.setAttribute('id', 'question');
    pQuestion.innerText = question;
    quiz.appendChild(pQuestion);
  }
};

const createQuestionContainer = () => {
  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add('question-container');
  quiz.appendChild(optionsContainer);
};

const generateQuestionOption = (question, letter) => {
  const optionsContainer = document.querySelector('.question-container');
  const buttonOption = document.createElement('button');

  buttonOption.innerText = `${letter}. ${question.label}`;
  buttonOption.setAttribute('id', 'option');

  buttonOption.addEventListener('click', function action(e) {
    answerQuestion(question);
    buttonOption.classList.add('selected');
    const options = document.querySelectorAll('.quiz #option');
    options.forEach(option => option.disabled = true);
  });
  optionsContainer.appendChild(buttonOption);
};

const disableNextButton = () => nextButton.disabled = true;

const generateQuestion = (item) => {
  removeOptions();
  createQuestionTitle(item.question);
  createQuestionContainer();
  disableNextButton();

  const letters = ['A', 'B', 'C', 'D', 'E'];

  for (let index = 0; index < item.options.length; index++) {
    const option = item.options[index];
    generateQuestionOption(option, letters[index]);
  }
};

const answerQuestion = (question) => {
  const { label, correct } = question;
  nextButton.disabled = false;
  if(correct) {
    score ++;
  }
};

const startStepCounter = () => {
  const header = document.querySelector('#header');
  const stepper = document.createElement('p');

  stepper.innerText = `Question ${step} of ${questions.length}`;
  stepper.setAttribute('id', 'stepper');
  header.appendChild(stepper);
};

const incrementStep = () => {
  step++;
  quiz.querySelector('#stepper').innerText = `Question ${step} of ${questions.length}`;
}

const resetCounter = () => {
  step = 1;
  score = 0;
};

const startQuiz = () => {
  resetCounter();
  shuffle();
  startStepCounter();
  scoreSection.classList.add('hidden');
  quiz.classList.remove('hidden');
};

const showScore = () => {
  const scoreMessage = scoreSection.querySelector('#message');
  const scoreText = scoreSection.querySelector('#score');
  if (score > Math.round(questions.length / 2)) {
    scoreMessage.innerText = 'Congrats! You have done a great Job! Here is your score:';
  } else {
    scoreMessage.innerText = "Don't stop trying, You are almost there! Here is your score:"
  }
  scoreText.innerText = score;
  scoreSection.classList.remove('hidden');

  nextButton.classList.add('hidden');
  startButton.classList.remove('hidden');
};

const removeCountersFromScreen = () => {
  const header = document.querySelector('#header');
  const title = document.querySelector('p#question');
  const stepper = document.querySelector('p#stepper');
  quiz.removeChild(title);
  header.removeChild(stepper);
};

const finishQuiz = () => {
  removeOptions();
  removeCountersFromScreen();
  showScore();
  quiz.classList.add('hidden');
};

const startTimer = () => {
  let minutes = 2;
  let seconds = 0;

  timer.classList.remove('hidden');
  timer.innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds }`;

  const interval = setInterval(() => {
    if (minutes === 0 && seconds === 0) {
      timer.classList.add('hidden');
      clearInterval(interval);
      finishQuiz();
    };

    if (seconds === 0 && minutes > 0) {
      seconds = 60;
      minutes--;
    }
    timer.innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds }`;
    seconds--;
  }, 1000);
};

// Main Methods
startButton.addEventListener('click', () => {
  startQuiz();
  generateQuestion(questions[0]);
  startButton.classList.add('hidden');
  nextButton.classList.remove('hidden');
  startTimer();
});

nextButton.addEventListener('click', () => {
  if (step < questions.length) {
    generateQuestion(questions[step]);
    incrementStep();
  } else {
    finishQuiz();
  }
});
