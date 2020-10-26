var buttonEl = document.querySelector("#start-quiz");

var timer = function(){

    document.getElementById("timer").innerHTML = t;

}
var startQuiz = function(event){
    event.preventDefault();
    var a = setInterval(timer, 1000);

}
buttonEl.addEventListener("click", startQuiz);
