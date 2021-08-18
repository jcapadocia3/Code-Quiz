document.getElementById("lets-begin").addEventListener("click", countdown);
var timeRemain = document.getElementById('timer');

var timeLeft = 60;

function countdown() {

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeRemain.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
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

document.getElementById("lets-begin").addEventListener("click", prepareQ1);

var question = document.getElementById("big-words")
var hideSmall = document.getElementById("small-words")
var hideStartQuiz = document.getElementById("lets-begin");
var showAnswer1 = document.getElementById("answer1");
var showAnswer2 = document.getElementById("answer2");
var showAnswer3 = document.getElementById("answer3");
var showAnswer4 = document.getElementById("answer4");

function prepareQ1() {
  question.textContent = "Test Question 1";
  hideSmall.style.display = "none";
  hideStartQuiz.style.display = "none";
  showAnswer1.style.display = "block";
  showAnswer2.style.display = "block";
  showAnswer3.style.display = "block";
  showAnswer4.style.display = "block";
  showAnswer1.textContent = "Test1 A1";
  showAnswer2.textContent = "Test1 A2";
  showAnswer3.textContent = "Test1 A3";
  showAnswer4.textContent = "Test1 A4";
}

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var breakpoint = document.getElementById("breakpoint");
var correctAns = document.getElementById("goodjob");
var wrongAns = document.getElementById("badjob");

answer1.addEventListener("click", addPoint);
answer2.addEventListener("click", subTime);
answer3.addEventListener("click", subTime);
answer4.addEventListener("click", subTime);

var score = 0

function addPoint() {
  console.log("it works!");
  score++;
  console.log(score);
  breakpoint.style.display = "block";
  correctAns.style.display = "block";
  prepareQ2();
}

function subTime() {
  console.log("it works!");
  timeLeft-=5;
  breakpoint.style.display = "block";
  wrongAns.style.display = "block";
  prepareQ2();
}

function prepareQ2() {
  answer1.removeEventListener("click", addPoint);
  answer2.removeEventListener("click", subTime);
  answer3.removeEventListener("click", subTime);
  answer4.removeEventListener("click", subTime);
  answer1.addEventListener("click", subTime1);
  answer2.addEventListener("click", addPoint1);
  answer3.addEventListener("click", subTime1);
  answer4.addEventListener("click", subTime1);
  breakpoint.style.display = "none";
  wrongAns.style.display = "none";
  question.textContent = "Test Question 2";
  showAnswer1.textContent = "Test2 A1";
  showAnswer2.textContent = "Test2 A2";
  showAnswer3.textContent = "Test2 A3";
  showAnswer4.textContent = "Test2 A4";
}

function addPoint1() {
  console.log("it works!");
  score++;
  console.log(score);
  breakpoint.style.display = "block";
  correctAns.style.display = "block";
  prepareQ3();
}

function subTime1() {
  console.log("it works!");
  timeLeft-=5;
  breakpoint.style.display = "block";
  wrongAns.style.display = "block";
  prepareQ3();
}

function prepareQ3() {
  answer1.removeEventListener("click", addPoint1);
  answer2.removeEventListener("click", subTime1);
  answer3.removeEventListener("click", subTime1);
  answer4.removeEventListener("click", subTime1);
  answer1.addEventListener("click", subTime2);
  answer2.addEventListener("click", subTime2);
  answer3.addEventListener("click", addPoint2);
  answer4.addEventListener("click", subTime2);
  breakpoint.style.display = "none";
  wrongAns.style.display = "none";
  question.textContent = "Test Question 3";
  showAnswer1.textContent = "Test3 A1";
  showAnswer2.textContent = "Test3 A2";
  showAnswer3.textContent = "Test3 A3";
  showAnswer4.textContent = "Test3 A4";
}

function addPoint2() {
  console.log("it works!");
  score++;
  console.log(score);
  breakpoint.style.display = "block";
  correctAns.style.display = "block";
  prepareQ4();
}

function subTime2() {
  console.log("it works!");
  timeLeft-=5;
  breakpoint.style.display = "block";
  wrongAns.style.display = "block";
  prepareQ4();
}

function prepareQ4() {
  answer1.removeEventListener("click", subTime2);
  answer2.removeEventListener("click", subTime2);
  answer3.removeEventListener("click", addPoint2);
  answer4.removeEventListener("click", subTime2);
  answer1.addEventListener("click", subTime3);
  answer2.addEventListener("click", subTime3);
  answer3.addEventListener("click", subTime3);
  answer4.addEventListener("click", addPoint3);
  breakpoint.style.display = "none";
  wrongAns.style.display = "none";
  question.textContent = "Test Question 4";
  showAnswer1.textContent = "Test4 A1";
  showAnswer2.textContent = "Test4 A2";
  showAnswer3.textContent = "Test4 A3";
  showAnswer4.textContent = "Test4 A4";
}

function addPoint3() {
  console.log("it works!");
  score++;
  console.log(score);
  breakpoint.style.display = "block";
  correctAns.style.display = "block";
  results();
}

function subTime3() {
  console.log("it works!");
  timeLeft-=5;
  breakpoint.style.display = "block";
  wrongAns.style.display = "block";
  results();
}

function results() {
  answer1.removeEventListener("click", subTime3);
  answer2.removeEventListener("click", subTime3);
  answer3.removeEventListener("click", subTime3);
  answer4.removeEventListener("click", addPoint3);
  showAnswer1.style.display = "none";
  showAnswer2.style.display = "none";
  showAnswer3.style.display = "none";
  showAnswer4.style.display = "none";
  breakpoint.style.display = "none";
  wrongAns.style.display = "none";
  question.textContent = "Fin!";
  hideSmall.style.display = "block";
  hideSmall.textContent = "You scored " + score + " out of 4!";
  submitScore();
}

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
  console.log("form submission success!");
});
