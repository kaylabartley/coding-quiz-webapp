//create button element
var buttonEl = document.querySelector("#start-quiz");
//create timer element
var timerEl = document.querySelector("#timer");
//create element that holds q&a to the quiz
var quizBoxEl = document.querySelector("#quiz");
//create elements for the answer buttons
/*var a1BtnEl = document.querySelector("#a1");
var a2BtnEl = document.querySelector("#a2");
var a3BtnEl = document.querySelector("#a3");
var a4BtnEl = document.querySelector("#a4");*/
//create element for the response of 'wrong or 'correct'
var responseEl = document.querySelector("#response");
var i = -1;

var qna = [
    {
        q:"Commonly used data types DO Not Include:",
        a1:"1. strings",
        a2:"2. booleans",
        a3:"3. alerts",
        a4:"4. numbers",
        correct: "a3"
    },
    {
        q:"The condition in an if/else statement is enclosed with _________. ",
        a1:"1. quotes",
        a2:"2. curly brackets",
        a3:"3. parenthesis",
        a4:"4. square brackets" ,
        correct: "a3"
    },
    {
        q:"Arrays in JavaScript can be used to store _________.",
        a1:"1. numbers and strings",
        a2:"2. other arrays",
        a3:"3. booleans",
        a4:"4. all of the above" ,
        correct: "a4"
    },
    {
        q:"String values must be enclosed within ______ when being assigned to variables.",
        a1:"1. commas",
        a2:"2. curly brackets",
        a3:"3. quotes",
        a4:"4. parenthesis" ,
        correct: "a3"
    },
    {
        q:"A very useful tool used during development and debugging for printing content to the debugger is:",
        a1:"1. JavaScript",
        a2:"2. terminal/bash",
        a3:"3. for loops",
        a4:"4. console.log" ,
        correct: "a4"
    }

]
var timer = function(){
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
var nextQuestion = function(){
    if(i===5){
       // submitInfo();
        return 0;
    }
    ++i;
    quizBoxEl.innerHTML = "<h2>" + qna[i].q + "</h2><button class='answerbtn' id='a1'>" + qna[i].a1 + "</button><button class='answerbtn' id='a2'>" + qna[i].a2 + "</button><button class='answerbtn' id='a3'>" + qna[i].a3 + "</button><button class='answerbtn' id='a4'>" + qna[i].a4 + "</button>";
    document.querySelector("#a1").addEventListener("click", function(event){
        event.preventDefault();
        if(qna[i].correct==="a1"){
            responseEl.innerHTML="Correct!";
            nextQuestion();
        }
        else{
            responseEl.innerHTML="Wrong!";
            nextQuestion();
        }
    });
    document.querySelector("#a2").addEventListener("click", function(event){
        event.preventDefault();
        if(qna[i].correct==="a2"){
            responseEl.innerHTML="Correct!";
            nextQuestion();
        }
       else{
            responseEl.innerHTML="Wrong!";
            nextQuestion();
        }
    });
    document.querySelector("#a3").addEventListener("click", function(event){
        event.preventDefault();
        if(qna[i].correct==="a3"){
            responseEl.innerHTML="Correct!";
            nextQuestion();
        }
        else{
            responseEl.innerHTML="Wrong!";
            nextQuestion();
        }
    });
    document.querySelector("#a4").addEventListener("click", function(event){
        event.preventDefault();
        if(qna[i].correct==="a4"){
            responseEl.innerHTML="Correct!";
        }
        else{
            responseEl.innerHTML="Wrong!";
            nextQuestion();
        }
    });
}
var startQuiz = function(event){
    event.preventDefault();
    timer();
    nextQuestion();
    
}
//excecutes startquiz function when button is clicked
buttonEl.addEventListener("click", startQuiz);
