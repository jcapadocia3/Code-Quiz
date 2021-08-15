var timeRemain = document.getElementById('timer');

function countdown() {
  var timeLeft = 30;

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

