document.getElementById("lets-begin").addEventListener("click", countdown);
var timeRemain = document.getElementById('timer');

function countdown() {

  var timeLeft = 10;

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
var showAnswers = document.getElementById("answer1");

function prepareQuiz() {
  question.textContent = "Question 1";
  hideSmall.style.display = "none";
  hideStartQuiz.style.display = "none";
  showAnswers.style.display = "block";
}

var answer1 = document.getElementById("answer1").addEventListener("click", quizTime);
// var answer2 = document.getElementById("answer2").addEventListener("click");
// var answer3 = document.getElementById("answer3").addEventListener("click");
// var answer4 = document.getElementById("answer4").addEventListener("click");

function quizTime() {

  var score = 0

  if (answer1) {
    console.log("it works!");
    score++;
    console.log(score)
 }
//  if (entry) {
//     console.log("entry");
//  } 
//  if (entry) {
//     console.log("entry");
//  } 
//  if (entry) {
//     console.log("entry");
//  } 
}