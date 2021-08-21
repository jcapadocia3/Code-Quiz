
  var timeRemain = document.getElementById('timer');
  var timeLeft = 60;
  
  function countdown() {
    timeLeft = 60;
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
  
  var question = document.getElementById("big-words")
  var hideSmall = document.getElementById("small-words")
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
  
  document.getElementById("lets-begin").addEventListener("click", prepareQ1);
  
  function prepareQ1() {
    question.textContent = "Test Question 1";
    hideSmall.style.display = "none";
    clear.style.display = "none";
    hideStartQuiz.style.display = "none";
    showAnswer1.style.display = "block";
    showAnswer2.style.display = "block";
    showAnswer3.style.display = "block";
    showAnswer4.style.display = "block";
    showAnswer1.textContent = "Test1 A1";
    showAnswer2.textContent = "Test1 A2";
    showAnswer3.textContent = "Test1 A3";
    showAnswer4.textContent = "Test1 A4";
    countdown();
    startthequiz();
  }
  
function startthequiz() {
var codequiz = [
    { question: "TestQ1?",
      answer: answer1.addEventListener("click", addPoint)
    },
    { question: "TestQ2?",
      answer: answer2.addEventListener("click", addPoint)
    },
    { question: "TestQ3?",
      answer: answer3.addEventListener("click", addPoint)
    },
    { question: "TestQ4?",
      answer: answer4.addEventListener("click", addPoint)
    }
  ]
  
  for(var i=0; i < codequiz.length; i++){
    var response = console.log(codequiz[i].question)
    if(response == codequiz[i].answer){
      addPoint();
    } else {
      subTime();
    }
  }
};

var score = 0

  function addPoint() {
    console.log("it works!");
    score++;
    console.log(score);
    breakpoint.style.display = "block";
    correctAns.style.display = "block";
  }
  
  function subTime() {
    console.log("it works!");
    timeLeft-=5;
    breakpoint.style.display = "block";
    wrongAns.style.display = "block";
  }
  
  function prepareQ2() {
    breakpoint.style.display = "none";
    wrongAns.style.display = "none";
    question.textContent = "Test Question 2";
    showAnswer1.textContent = "Test2 A1";
    showAnswer2.textContent = "Test2 A2";
    showAnswer3.textContent = "Test2 A3";
    showAnswer4.textContent = "Test2 A4";
  }
  
  function prepareQ3() {
    breakpoint.style.display = "none";
    wrongAns.style.display = "none";
    question.textContent = "Test Question 3";
    showAnswer1.textContent = "Test3 A1";
    showAnswer2.textContent = "Test3 A2";
    showAnswer3.textContent = "Test3 A3";
    showAnswer4.textContent = "Test3 A4";
  }
  
  function prepareQ4() {
    breakpoint.style.display = "none";
    wrongAns.style.display = "none";
    question.textContent = "Test Question 4";
    showAnswer1.textContent = "Test4 A1";
    showAnswer2.textContent = "Test4 A2";
    showAnswer3.textContent = "Test4 A3";
    showAnswer4.textContent = "Test4 A4";
  }
  
  function results() {
    
    showAnswer1.style.display = "none";
    showAnswer2.style.display = "none";
    showAnswer3.style.display = "none";
    showAnswer4.style.display = "none";
    breakpoint.style.display = "none";
    wrongAns.style.display = "none";
    question.textContent = "Fin!";
    hideSmall.style.display = "block";
    hideSmall.textContent = "You scored " + score + " out of 4!";
    timeLeft = 0;
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
    store();
  });
  
  function store(){
    var new_data = document.getElementById("initials").value;
  
    if (localStorage.getItem("initials") == null){
      localStorage.setItem("initials", "[]");
    }
  
    var old_data = JSON.parse(localStorage.getItem("initials"));
    old_data.push(new_data + ": " + score);
  
    localStorage.setItem("initials", JSON.stringify(old_data));
  
    showscores();
    playagain();
  };
  
  var clear = document.getElementById("clearscores")
  
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
  
  function playagain() {
    question.textContent = "Saved Scores";
    hideStartQuiz.textContent = "Play Again!";
    hideStartQuiz.style.display = "block";
    enterInitText.style.display = "none";
    typeInit.style.display = "none";
    submitButt.style.display = "none";
  
    document.getElementById("lets-begin").addEventListener("click", prepareQ1);
  };
  