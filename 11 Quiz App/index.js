const questions = [
  {
    question: 'Qual linguagem mais utilizada por um DBA?',
    options: [
      { label: 'SQL', correct: true },
      { label: 'Java', correct: false },
      { label: 'C#', correct: false },
      { label: 'Excel', correct: false },
      { label: 'C++', correct: false },
    ]
  },
  {
    question: 'Qual tecnologia pode ser utilizada para criação de apps Desktop?',
    options: [
      { label: 'Electron', correct: true },
      { label: 'NestJs', correct: false },
      { label: '.NET Core', correct: false },
      { label: 'Spring Boot', correct: false },
      { label: 'Todas anteriores', correct: false },
    ]
  },
  {
    question: 'Qual o significado da sigla SPA?',
    options: [
      { label: 'Single Page Application', correct: true },
      { label: 'Simples Poderoso e Aplicável', correct: false },
      { label: 'SQL Power Automation', correct: false },
      { label: 'Sem Poder de Automação', correct: false },
      { label: 'Nenhum das anteriores', correct: false },
    ]
  },
  {
    question: 'Qual tecnologia é possível criar apps para devices móveis?',
    options: [
      { label: 'Todas anteriores', correct: true },
      { label: 'React', correct: false },
      { label: 'Xamarin', correct: false },
      { label: 'Android', correct: false },
      { label: 'Flutter', correct: false },
    ]
  },
  {
    question: 'O Node é baseado em qual tecnologia?',
    options: [
      { label: 'V8 Chrome', correct: true },
      { label: 'Chromium', correct: false },
      { label: 'JVM', correct: false },
      { label: 'Microsoft Office', correct: false },
      { label: 'Nenhuma das anteriores', correct: false },
    ]
  },
];

const quiz = document.querySelector('.quiz');
const scoreSection = document.querySelector('.score');
const startButton = document.querySelector('#start');
const nextButton = document.querySelector('#next-question');
const timer = document.querySelector('#timer');

let timerInterval = null;
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
  stopTimer();
  quiz.classList.add('hidden');
};

const stopTimer = () => {
  timer.classList.add('hidden');
  clearInterval(timerInterval);
};

const startTimer = () => {
  let minutes = 2;
  let seconds = 0;

  timer.classList.remove('hidden');
  timer.innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds }`;

  timerInterval = setInterval(() => {
    if (minutes === 0 && seconds === 0) {
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
