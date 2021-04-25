// TODO: Create a timer variable and function

var quizQuestions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title: "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

// Quiz Page Variables
var time = quizQuestions.length * 12;
var questionIndex = 0;
var timerState;
var startBtn = document.getElementById("startBtn");
var questionsDiv = document.getElementById("questions");
var choicesDiv = document.getElementById("choices");
var resultsDiv = document.getElementById("results");
var refreshButton = document.getElementById("clear-highScores");
var timerDiv = document.getElementById("time");
var endScreen = document.getElementById("end-screen");
var initialsElement = document.getElementById("initials");
var feedbackElement = document.getElementById("feedback");
var score = 0;
var resultsDiv = document.getElementById("results-div")

// High Scores Page Variables
var clearHighScoresBtn = document.getElementById("clearHighScoresBtn");
var goBackBtn = document.getElementById("goBackBtn")


// Function to decrement the time.
function defineInterval () {
    time--;
    timerDiv.textContent = time;
    if (time <= 0) {
    
    quizEnd ();
    }
}

// Hide the start screen and unhide the questions
function startQuiz () {
    var startScreen = document.getElementById("startScreen");
    startScreen.setAttribute("class", "hide");
    questionsDiv.removeAttribute("class")

    timerState = setInterval(defineInterval, 1000)
    timerDiv.textContent = time;
    displayQuestions ();
}

function displayQuestions () {
    currentQuestion = quizQuestions[questionIndex];
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = currentQuestion.title;
    // Clear out previous questions
    choicesDiv.textContent = ""

    // Use a for each to render a question button for each answer in the choices array
    currentQuestion.choices.forEach(function (choice) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = choice;
        choiceButton.onclick = checkAnswer;
        choicesDiv.appendChild(choiceButton);
    });
}

function checkAnswer () {
    if (this.value !== quizQuestions [questionIndex].answer) {
        time = time-10;
        timerDiv.textContent = time;
        feedbackElement.textContent = "Incorrect"
        console.log("Incorrect");
    } else {
        feedbackElement.textContent = "Correct!"
        console.log("Correct!")  
    }

    questionIndex++;

    if (questionIndex === quizQuestions.length) {
        quizEnd ();
    } else {
        displayQuestions ();
    }

}

// Stops the timer and ends the quiz
function quizEnd () {
    clearInterval (timerState);
    console.log("Clicked to end of question array")
    endScreen.removeAttribute ("class");
    questionsDiv.setAttribute ("class", "hide")
}

startBtn.onclick = startQuiz;


// set score to be the time
// put feedback element (correct or incorrect) on a feedback loop (one way to do it)
// store high scores by grabbing value of name input
// create an object (var scoreObject = {score: time, initials: value of name input})