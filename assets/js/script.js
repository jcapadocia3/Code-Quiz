// Function to start a 60 second timer when appropriate
var timeRemain = document.getElementById("timer");
var timeLeft = 60;

function countdown() {
  timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeRemain.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timeRemain.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      clearInterval(timeInterval);
      timeRemain.textContent = "Time's up!";
      results();
    }
  }, 1000);
}

// Multiple variables used throughout and defined in the code to show/hide appropriate text fields/buttons when appropriate
var question = document.getElementById("big-words");
var hideSmall = document.getElementById("small-words");
var hideStartQuiz = document.getElementById("lets-begin");
var showAnswer1 = document.getElementById("answer1");
var showAnswer2 = document.getElementById("answer2");
var showAnswer3 = document.getElementById("answer3");
var showAnswer4 = document.getElementById("answer4");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var breakpoint = document.getElementById("breakpoint");
var correctAns = document.getElementById("goodjob");
var wrongAns = document.getElementById("badjob");

// Click event to call out necessary functions once the Quiz is started
document.getElementById("lets-begin").addEventListener("click", prepareQ1);

// Begin Question 1:
// All necesary variables are adjusted to show question and buttons (answers) appropriately
// All necessary event listeners/functions assigned
// Call to begin 60 second timer
function prepareQ1() {
  hideSmall.style.display = "none";
  clear.style.display = "none";
  hideStartQuiz.style.display = "none";
  showAnswer1.style.display = "block";
  showAnswer2.style.display = "block";
  showAnswer3.style.display = "block";
  showAnswer4.style.display = "block";
  question.textContent = "What tag defines a division or the beginning/end of an individual section in an HTML document?";
  showAnswer1.textContent = "<div>";
  showAnswer2.textContent = "<meta>";
  showAnswer3.textContent = "<table>";
  showAnswer4.textContent = "<img>";
  answer1.addEventListener("click", addPoint);
  answer2.addEventListener("click", subTime);
  answer3.addEventListener("click", subTime);
  answer4.addEventListener("click", subTime);
  score = 0;
  countdown();
}

// Variable to determine the score will start at "0"
var score = 0;


// Functions to be called on through the event listeners to "score++" and "time--"" depending on user choices
function addPoint() {
  score++;
  console.log(score);
  breakpoint.style.display = "block";
  correctAns.style.display = "block";
  wrongAns.style.display = "none";
  prepareQ2();
}

function subTime() {
  timeLeft -= 5;
  breakpoint.style.display = "block";
  wrongAns.style.display = "block";
  correctAns.style.display = "none";
  prepareQ2();
}

// Begin Question 2:
// All necesary variables are adjusted to show question and buttons (answers) appropriately for Question 2
// All necessary event listeners/functions are rewritten for "score++"" or "time--"" to function based on correct/incorrect answers for the new question
function prepareQ2() {
  answer1.removeEventListener("click", addPoint);
  answer2.removeEventListener("click", subTime);
  answer3.removeEventListener("click", subTime);
  answer4.removeEventListener("click", subTime);
  answer1.addEventListener("click", subTime1);
  answer2.addEventListener("click", addPoint1);
  answer3.addEventListener("click", subTime1);
  answer4.addEventListener("click", subTime1);
  question.textContent = "What are the CSS properties that are used to add space around sections of content?";
  showAnswer1.textContent = "Spacing";
  showAnswer2.textContent = "Padding";
  showAnswer3.textContent = "Break";
  showAnswer4.textContent = "Cleaner";
}

function addPoint1() {
  score++;
  console.log(score);
  breakpoint.style.display = "block";
  correctAns.style.display = "block";
  wrongAns.style.display = "none";
  prepareQ3();
}

function subTime1() {
  timeLeft -= 5;
  breakpoint.style.display = "block";
  wrongAns.style.display = "block";
  correctAns.style.display = "none";
  prepareQ3();
}

// Begin Question 3:
// All necesary variables are adjusted to show question and buttons (answers) appropriately for Question 3
// All necessary event listeners/functions are rewritten for "score++"" or "time--"" to function based on correct/incorrect answers for the new question
function prepareQ3() {
  answer1.removeEventListener("click", subTime1);
  answer2.removeEventListener("click", addPoint1);
  answer3.removeEventListener("click", subTime1);
  answer4.removeEventListener("click", subTime1);
  answer1.addEventListener("click", subTime2);
  answer2.addEventListener("click", subTime2);
  answer3.addEventListener("click", addPoint2);
  answer4.addEventListener("click", subTime2);
  question.textContent = "CSS stands for ____ Style Sheets.";
  showAnswer1.textContent = "Concept";
  showAnswer2.textContent = "Curious";
  showAnswer3.textContent = "Cascading";
  showAnswer4.textContent = "Concave";
}

function addPoint2() {
  score++;
  console.log(score);
  breakpoint.style.display = "block";
  correctAns.style.display = "block";
  wrongAns.style.display = "none";
  prepareQ4();
}

function subTime2() {
  timeLeft -= 5;
  breakpoint.style.display = "block";
  wrongAns.style.display = "block";
  correctAns.style.display = "none";
  prepareQ4();
}

// Begin Question 4:
// All necesary variables are adjusted to show question and buttons (answers) appropriately for Question 4
// All necessary event listeners/functions are rewritten for "score++"" or "time--"" to function based on correct/incorrect answers for the new question
function prepareQ4() {
  answer1.removeEventListener("click", subTime2);
  answer2.removeEventListener("click", subTime2);
  answer3.removeEventListener("click", addPoint2);
  answer4.removeEventListener("click", subTime2);
  answer1.addEventListener("click", subTime3);
  answer2.addEventListener("click", subTime3);
  answer3.addEventListener("click", subTime3);
  answer4.addEventListener("click", addPoint3);
  question.textContent = "What tag is used to define the metadata about an HTML document, and must always be included inside the element?";
  showAnswer1.textContent = "<img>";
  showAnswer2.textContent = "<table>";
  showAnswer3.textContent = "<div>";
  showAnswer4.textContent = "<meta>";
}

function addPoint3() {
  score++;
  console.log(score);
  breakpoint.style.display = "block";
  correctAns.style.display = "block";
  wrongAns.style.display = "none";
  results();
}

function subTime3() {
  timeLeft -= 5;
  breakpoint.style.display = "block";
  wrongAns.style.display = "block";
  correctAns.style.display = "none";
  results();
}

// Begin function to show results -- All event listeners and answer buttons are removed/hidden
// Appropriate variable is adjusted to show the user's final score
function results() {
  answer1.removeEventListener("click", subTime3);
  answer2.removeEventListener("click", subTime3);
  answer3.removeEventListener("click", subTime3);
  answer4.removeEventListener("click", addPoint3);
  showAnswer1.style.display = "none";
  showAnswer2.style.display = "none";
  showAnswer3.style.display = "none";
  showAnswer4.style.display = "none";
  question.textContent = "Fin!";
  hideSmall.style.display = "block";
  hideSmall.textContent = "You scored " + score + " out of 4!";
  timeLeft = 0;
  submitScore();
}

//  Begin required form submission variables and functions
var enterInitText = document.getElementById("userinfo");
var typeInit = document.getElementById("initials");
var submitButt = document.getElementById("submitButt");

function submitScore() {
  enterInitText.style.display = "block";
  typeInit.style.display = "block";
  submitButt.style.display = "block";
}

var submitForm = document.getElementById("submitform");

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  store();
  breakpoint.style.display = "none";
  wrongAns.style.display = "none";
  correctAns.style.display = "none";
});

// Begin function to store form submission data onto local storage
function store() {
  var new_data = document.getElementById("initials").value;

  if (localStorage.getItem("initials") == null) {
    localStorage.setItem("initials", "[]");
  }

  var old_data = JSON.parse(localStorage.getItem("initials"));
  old_data.push(new_data + ": " + score);

  localStorage.setItem("initials", JSON.stringify(old_data));

  showscores();
  playagain();
}

// Begin function to pull locally stored data and show them on the web page
// Begin event listener and function to clear locally stored data if the user chooses to do so
var clear = document.getElementById("clearscores");

function showscores() {
  var getscores = localStorage.getItem("initials");
  var logscores = JSON.parse(getscores);
  console.log(logscores);
  hideSmall.textContent = logscores;

  clear.style.display = "block";
  clear.addEventListener("click", clearall);
}

function clearall() {
  localStorage.clear();
  hideSmall.style.display = "none";
}

// Begin function to run code from the beginning if user chooses to "Play Again"
function playagain() {
  question.textContent = "Saved Scores";
  hideStartQuiz.textContent = "Play Again!";
  hideStartQuiz.style.display = "block";
  enterInitText.style.display = "none";
  typeInit.style.display = "none";
  submitButt.style.display = "none";

  document.getElementById("lets-begin").addEventListener("click", prepareQ1);
}
