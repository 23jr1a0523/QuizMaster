
const questionBank = {
  science: [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: 1
    },
    {
      question: "What is the chemical formula of water?",
      options: ["CO2", "O2", "H2O", "NaCl"],
      answer: 2
    },
    {
      question: "Which organ pumps blood through the human body?",
      options: ["Lungs", "Brain", "Liver", "Heart"],
      answer: 3
    },
    {
      question: "What gas do plants absorb during photosynthesis?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      answer: 1
    },
    {
      question: "What is the nearest star to Earth?",
      options: ["Sirius", "Sun", "Polaris", "Alpha Centauri"],
      answer: 1
    },
    {
      question: "What force pulls objects toward Earth?",
      options: ["Friction", "Magnetism", "Gravity", "Pressure"],
      answer: 2
    },
    {
      question: "What is the boiling point of water at sea level?",
      options: ["50°C", "75°C", "100°C", "150°C"],
      answer: 2
    },
    {
      question: "Which part of a plant absorbs water from the soil?",
      options: ["Flowers", "Leaves", "Stem", "Roots"],
      answer: 3
    },
    {
      question: "How many bones are typically in an adult human body?",
      options: ["106", "206", "306", "406"],
      answer: 1
    },
    {
      question: "Which vitamin can the body produce with sunlight exposure?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
      answer: 3
    }
  ],

  technology: [
    {
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Utility",
        "Control Processing User"
      ],
      answer: 0
    },
    {
      question: "Which company develops Windows?",
      options: ["Apple", "Microsoft", "Google", "Intel"],
      answer: 1
    },
    {
      question: "What does URL stand for?",
      options: [
        "Universal Reading Link",
        "User Resource Language",
        "Uniform Resource Locator",
        "Unified Reference List"
      ],
      answer: 2
    },
    {
      question: "Which device is used to connect a computer network to the internet?",
      options: ["Scanner", "Printer", "Keyboard", "Router"],
      answer: 3
    },
    {
      question: "What does RAM stand for?",
      options: [
        "Read Access Memory",
        "Random Access Memory",
        "Rapid Action Module",
        "Remote Access Machine"
      ],
      answer: 1
    },
    {
      question: "Which of these is an operating system?",
      options: ["Linux", "Python", "HTML", "Google Chrome"],
      answer: 0
    },
    {
      question: "What does HTTP primarily define?",
      options: [
        "Image editing",
        "File compression",
        "Web communication",
        "Hardware design"
      ],
      answer: 2
    },
    {
      question: "Which is a cloud storage service?",
      options: ["Notepad", "Paint", "Calculator", "Google Drive"],
      answer: 3
    },
    {
      question: "What does USB stand for?",
      options: [
        "Universal Serial Bus",
        "Unified System Board",
        "Universal Storage Box",
        "User Service Base"
      ],
      answer: 0
    },
    {
      question: "Which number system do computers primarily use?",
      options: ["Decimal", "Binary", "Roman", "Octal only"],
      answer: 1
    }
  ],

  programming: [
    {
      question: "Which keyword is used to create a class in Java?",
      options: ["function", "define", "class", "struct"],
      answer: 2
    },
    {
      question: "Which symbol terminates most Java statements?",
      options: [";", ":", ".", ","],
      answer: 0
    },
    {
      question: "Which data type stores true or false in Java?",
      options: ["int", "char", "String", "boolean"],
      answer: 3
    },
    {
      question: "Which loop executes while a condition is true?",
      options: ["switch", "while", "case", "import"],
      answer: 1
    },
    {
      question: "Which HTML tag creates a hyperlink?",
      options: ["<p>", "<img>", "<a>", "<h1>"],
      answer: 2
    },
    {
      question: "Which CSS property changes text color?",
      options: ["color", "font-style", "background", "text-align"],
      answer: 0
    },
    {
      question: "Which JavaScript keyword declares a block-scoped variable that can be reassigned?",
      options: ["const", "let", "static", "class"],
      answer: 1
    },
    {
      question: "What is the first index of a Java array?",
      options: ["1", "-1", "Depends on size", "0"],
      answer: 3
    },
    {
      question: "Which operator checks strict equality in JavaScript?",
      options: ["=", "==", "===", "!="],
      answer: 2
    },
    {
      question: "Which data structure follows FIFO?",
      options: ["Queue", "Stack", "Tree", "Graph"],
      answer: 0
    }
  ],

  all: [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Chennai", "Hyderabad"],
      answer: 1
    },
    {
      question: "How many days are there in a leap year?",
      options: ["364", "365", "366", "367"],
      answer: 2
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"],
      answer: 0
    },
    {
      question: "How many colors are traditionally in a rainbow?",
      options: ["Five", "Six", "Eight", "Seven"],
      answer: 3
    },
    {
      question: "Which animal is known as the largest land animal?",
      options: ["Giraffe", "African elephant", "Rhino", "Hippopotamus"],
      answer: 1
    },
    {
      question: "Which language is primarily spoken in Brazil?",
      options: ["Spanish", "French", "Portuguese", "Italian"],
      answer: 2
    },
    {
      question: "How many sides does a hexagon have?",
      options: ["Six", "Five", "Seven", "Eight"],
      answer: 0
    },
    {
      question: "Which instrument measures temperature?",
      options: ["Barometer", "Compass", "Speedometer", "Thermometer"],
      answer: 3
    },
    {
      question: "Which is the smallest prime number?",
      options: ["1", "2", "3", "0"],
      answer: 1
    },
    {
      question: "Which planet is famous for its rings?",
      options: ["Mercury", "Mars", "Saturn", "Earth"],
      answer: 2
    }
  ]
};

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");

const categorySelect = document.getElementById("category");
const questionNumber = document.getElementById("questionNumber");
const questionCategory = document.getElementById("questionCategory");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const feedback = document.getElementById("feedback");

const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const percentageDisplay = document.getElementById("percentage");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const finalPoints = document.getElementById("finalPoints");

let questions = [];
let currentIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 15;
let timerId = null;
let answered = false;
let quizActive = false;

const QUESTION_TIME = 15;

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function startQuiz() {
  clearInterval(timerId);

  const category = categorySelect.value;
  const selectedQuestions = questionBank[category] || questionBank.all;

  questions = shuffle(selectedQuestions).slice(0, 10);

  currentIndex = 0;
  score = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  quizActive = true;

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  clearInterval(timerId);

  if (currentIndex >= questions.length) {
    showResults();
    return;
  }

  answered = false;
  timeLeft = QUESTION_TIME;

  const currentQuestion = questions[currentIndex];

  questionNumber.textContent =
    `Question ${currentIndex + 1} of ${questions.length}`;

  questionCategory.textContent =
    categorySelect.options[categorySelect.selectedIndex].text.toUpperCase();

  questionText.textContent = currentQuestion.question;

  progressBar.style.width =
    `${(currentIndex / questions.length) * 100}%`;

  timerDisplay.textContent = `⏱ ${timeLeft}s`;
  timerDisplay.classList.remove("warning");

  feedback.textContent = "";
  feedback.className = "feedback";

  nextBtn.disabled = true;
  nextBtn.textContent =
    currentIndex === questions.length - 1
      ? "See Results →"
      : "Next Question →";

  optionsContainer.replaceChildren();

  currentQuestion.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const label = document.createElement("span");
    label.textContent = optionText;

    button.append(letter, label);

    button.addEventListener("click", () => {
      selectAnswer(index);
    });

    optionsContainer.appendChild(button);
  });

  timerId = setInterval(() => {
    timeLeft--;

    timerDisplay.textContent = `⏱ ${timeLeft}s`;

    if (timeLeft <= 5) {
      timerDisplay.classList.add("warning");
    }

    if (timeLeft <= 0) {
      clearInterval(timerId);
      handleTimeout();
    }
  }, 1000);
}

function selectAnswer(selectedIndex) {
  if (answered || !quizActive) {
    return;
  }

  answered = true;
  clearInterval(timerId);

  const question = questions[currentIndex];
  const buttons = optionsContainer.querySelectorAll(".option");
  const isCorrect = selectedIndex === question.answer;

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    } else if (index === selectedIndex) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    correctAnswers++;
    score += 10;

    feedback.textContent = "✓ Correct answer! Well done.";
    feedback.classList.add("success");
  } else {
    wrongAnswers++;

    feedback.textContent =
      `✗ Incorrect. Correct answer: ${question.options[question.answer]}`;

    feedback.classList.add("error");
  }

  progressBar.style.width =
    `${((currentIndex + 1) / questions.length) * 100}%`;

  nextBtn.disabled = false;
}

function handleTimeout() {
  if (answered || !quizActive) {
    return;
  }

  answered = true;
  wrongAnswers++;

  const question = questions[currentIndex];
  const buttons = optionsContainer.querySelectorAll(".option");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    }
  });

  feedback.textContent =
    `⏰ Time's up! Correct answer: ${question.options[question.answer]}`;

  feedback.classList.add("error");

  progressBar.style.width =
    `${((currentIndex + 1) / questions.length) * 100}%`;

  nextBtn.disabled = false;
}

function nextQuestion() {
  if (!answered || !quizActive) {
    return;
  }

  currentIndex++;
  showQuestion();
}

function showResults() {
  clearInterval(timerId);
  quizActive = false;

  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const total = questions.length;
  const percentage = Math.round((correctAnswers / total) * 100);

  percentageDisplay.textContent = `${percentage}%`;
  correctCount.textContent = correctAnswers;
  wrongCount.textContent = wrongAnswers;
  finalPoints.textContent = score;

  if (percentage >= 80) {
    resultIcon.textContent = "🏆";
    resultTitle.textContent = "Amazing Work!";
    resultMessage.textContent =
      "Outstanding! You have an excellent understanding of this topic.";
  } else if (percentage >= 50) {
    resultIcon.textContent = "🎉";
    resultTitle.textContent = "Good Job!";
    resultMessage.textContent =
      "Nice effort! Keep practising and you will get an even better score.";
  } else {
    resultIcon.textContent = "💪";
    resultTitle.textContent = "Keep Learning!";
    resultMessage.textContent =
      "Every attempt makes you better. Try again and beat your score!";
  }
}

function goHome() {
  clearInterval(timerId);
  quizActive = false;

  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  progressBar.style.width = "0%";
}

startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);

restartBtn.addEventListener("click", startQuiz);

homeBtn.addEventListener("click", goHome);
