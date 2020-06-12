//question arrays
var qsn = ["______ JavaScript is also called client-side JavaScript.", "__________ JavaScript is also called server-side JavaScript.", "Which of the following are capabilities of functions in JavaScript?", "______ tag is an extension to HTML that can enclose any number of JavaScript statements."];
var btn1 = ["Microsoft", "Microsoft", "Return a value", "<SCRIPT>"];
var btn2 = ["Navigator", "Navigator", "Accept parameters and Return a value", "<BODY>"];
var btn3 = ["LiveWire", "LiveWire", "Accept parameters", "<HEAD>"];
var btn4 = ["Native", "Native", "None of the above", "<TITLE>"];
var correct = ["Navigator", "LiveWire", "Accept parameters", "<SCRIPT>"];
//elements connected to html
var startbutton = document.querySelector("#start");
var asked = document.querySelector("#question");
var time = document.querySelector("#time");
var score = document.querySelector("#score");
var action = document.querySelector("#action");
var submit = document.querySelector("#submit");
var initials = document.querySelector("#fname");
var highSPage = document.querySelector("#high");
var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");
//needed variables 
var timer = 90;
var timeLeft;
var stopwatchTimer = null;
var i = 0;
var correctnum = 0;
var keepHigh = [];
var showHigh=[];




//starts whole function
startbutton.addEventListener("click", function () {
    if(stopwatchTimer === null) {
//sets a timer
    stopwatchTimer = setInterval(countupTimer, 1000);
    }
    startbutton.setAttribute("class", "hide")
// shows hidden buttons from HTML
    button1.setAttribute("class", "answercss")
    button2.setAttribute("class", "answercss")
    button3.setAttribute("class", "answercss")
    button4.setAttribute("class", "answercss")
//answer buttons text is that of first string in each saved array
    asked.textContent = qsn[0]
    button1.textContent = btn1[0]
    button2.textContent = btn2[0]
    button3.textContent = btn3[0]
    button4.textContent = btn4[0]
// adds event: function resond will run when any button is pressed 
    button1.addEventListener("click", respond);
    button2.addEventListener("click", respond);
    button3.addEventListener("click", respond);
    button4.addEventListener("click", respond);

});
// function for timer
function countupTimer() {
    timer--;
    time.textContent = "Time: " + timer;
    //when timer is done, bring to next slide
    if (timer == 0) {
        return timeUp()
    }
}
//each time quiz button is pressed, switch questions on button
function respond(event) {
    // if the answer is correct you get credit
    if (event.target.textContent == correct[i]) {
        correctnum = correctnum + 1;

    } else { timer = timer - 10 }
    i++
    asked.textContent = qsn[i]
    button1.textContent = btn1[i]
    button2.textContent = btn2[i]
    button3.textContent = btn3[i]
    button4.textContent = btn4[i]
    //if all questions are answered, go to next function 
    if (i == 4) {
        return timeUp();

    }

}
// pages asks for username and displays quiz score 
function timeUp() {
    time = 0
    asked.textContent = "score"
    button1.setAttribute("class", "hide")
    button2.setAttribute("class", "hide")
    button3.setAttribute("class", "hide")
    button4.setAttribute("class", "hide")
    score.setAttribute("class", "show");
    score.textContent = "Your score is " + correctnum;
    action.setAttribute("class", "show");

    submit.addEventListener("click", after);

}
//adds answers to local storage 
function after() {
    var yourUser = initials.value
    keepHigh.push({ User: yourUser, Score: correctnum });
    showHigh = JSON.parse(localStorage.getItem("score"));
    keepHigh = keepHigh.concat(showHigh);
    localStorage.setItem("score", JSON.stringify(keepHigh));
    


}








