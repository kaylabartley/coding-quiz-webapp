//create button element
var buttonEl = document.querySelector("#start-quiz");
//create timer element
var timerEl = document.querySelector("#timer");


var startQuiz = function(event){
    event.preventDefault();
    var timeLeft=75;
    //interval to countdown from 75
    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
          timerEl.textContent = timeLeft;
          timeLeft--;
        } 
        else {
          timerEl.textContent = '';
          clearInterval(timeInterval);
        }
    }, 1000);
}
//excecutes startquiz function when button is clicked
buttonEl.addEventListener("click", startQuiz);