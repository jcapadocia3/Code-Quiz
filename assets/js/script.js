document.getElementById("lets-begin").addEventListener("click", countdown);
var timeRemain = document.getElementById('timer');

var timeLeft = 60;

function countdown() {

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeRemain.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
      console.log(timeLeft)
    } else if (timeLeft === 1) {
      timeRemain.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timeRemain.textContent = '';
      clearInterval(timeInterval);
      timeRemain.textContent = "Time's up!";
    }
  }, 1000);
}

document.getElementById("lets-begin").addEventListener("click", prepareQuiz);

var question = document.getElementById("big-words")
var hideSmall = document.getElementById("small-words")
var hideStartQuiz = document.getElementById("lets-begin");
var showAnswer1 = document.getElementById("answer1");
var showAnswer2 = document.getElementById("answer2");
var showAnswer3 = document.getElementById("answer3");
var showAnswer4 = document.getElementById("answer4");

function prepareQuiz() {
  question.textContent = "Question 1";
  hideSmall.style.display = "none";
  hideStartQuiz.style.display = "none";
  showAnswer1.style.display = "block";
  showAnswer2.style.display = "block";
  showAnswer3.style.display = "block";
  showAnswer4.style.display = "block";
}

var answer1 = document.getElementById("answer1").addEventListener("click", addPoint);
var answer2 = document.getElementById("answer2").addEventListener("click", subTime);
var answer3 = document.getElementById("answer3").addEventListener("click", subTime);
var answer4 = document.getElementById("answer4").addEventListener("click", subTime);

var score = 0

function addPoint() {
  console.log("it works!");
  score++;
  console.log(score);
  return true;
}

function subTime() {
  console.log("it works!");
  timeLeft-=3;
  return false;
}