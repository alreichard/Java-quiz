var qsn = ["Best pet", "best car", "best food", "best state"];
var btn1 = ["turtle", "volvo", "steak", "Utah"];
var btn2 = ["cat", "BMW", "cheese", "Pennsylvania"];
var btn3 = ["dog", "mercedes", "pork", "New york"];
var btn4 = ["hamster", "porche", "popcorn", "California"];
var correct = ["dog", "BMW", "cheese", "Utah"];
var button1 = document.querySelector("#answer1");
var asked = document.querySelector("#question");
var time = document.querySelector("#time")
var timer = 90;
var stopwatchTimer = null;




button1.addEventListener("click", function () {
    //if(stopwatchTimer === null) {
    stopwatchTimer = setInterval(countupTimer, 1000);





    
    var button2 = document.createElement("button");
    button2.setAttribute("style", "background-color:blue; color:white; jusitfy-content: center; align-items: center;");
    document.body.appendChild(button2);

    var button3 = document.createElement("button");
    button3.setAttribute("style", "background-color:blue; color:white; jusitfy-content: center; align-items: center;");
    document.body.appendChild(button3);

    var button4 = document.createElement("button");
    button4.setAttribute("style", "background-color:blue; color:white; jusitfy-content: center; align-items: center");
    document.body.appendChild(button4);

    for (i = 0; i < 4;) {
        //var truth = false
        //while (truth == false) {
            asked.textContent = qsn[i]
            button1.textContent = btn1[i]
            button2.textContent = btn2[i]
            button3.textContent = btn3[i]
            button4.textContent = btn4[i]

            //while (truth == false){
            button1.addEventListener("click", respond);
            button2.addEventListener("click", respond);
            button3.addEventListener("click", respond);
            button4.addEventListener("click", respond);
            i++
        //}
    }
});
function countupTimer() {
    // timer--;
    time.textContent = "Time: " + timer;
}
function respond() {
    alert("cool")
    //truth = true
}
