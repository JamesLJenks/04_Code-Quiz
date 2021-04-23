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

var time = quizQuestions.length * 10;
var questionIndex = 0;
var timerState;
var startBtn = document.getElementById("startBtn");
var questionsDiv = document.getElementById("questions");
var choicesDiv = document.getElementById("choices");
var highScoreBtn = document.getElementById("clearHighScoresBtn");
var goBackBtn = document.getElementById("goBackBtn")
var resultsDiv = document.getElementById("results");
var refreshButton = document.getElementById("clear-highScores");
var timerDiv = document.getElementById("time");

var initialsElement = document.getElementById("initials");
var feedbackElement = document.getElementById("feedback");

// Function to start quiz
    // JavaScript coding text block and start button hide
    // Timer appears and starts
    // First question appears below timer

// Function to run the timer (setInterval?)
    // If timer runs out before quiz is over, deliver message
function defineInterval () {
    time--;
    timerDiv.textContent = time;
    if (time <= 0) {
        console.log ("Time is up!")
    
    quizEnd ();
    }
}

// Hide the start screen and unhide the questions
function startQuiz () {
    var startScreen = document.getElementById("startScreen");
    startScreen.setAttribute("class", "hide");
    questionsDiv.removeAttribute("class")

    timeState = setInterval(defineInterval, 1000)
    timerDiv.textContent = time;
    // function to display question
}

// Function to assess and score responses.
    // If question is answered correctly,
        // Then score points (store in )
        // Then Deliver "Correct!" message
        // Then hide question block
        // Then advance to next question
    // If question is answered incorrectly,
        // Then subtract points





// Stops the timer and ends the quiz
function quizEnd () {
    clearInterval (timerState)
}



startBtn.onclick = startQuiz;