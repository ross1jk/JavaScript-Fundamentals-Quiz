//card varibles
var introEl = document.querySelector("#intro"); 
var qu1El = document.querySelector("#qu1");
var qu2El = document.querySelector("#qu2");
var qu3El = document.querySelector("#qu3");
var qu4El = document.querySelector("#qu4");
var qu5El = document.querySelector("#qu5");
var completeEl = document.querySelector("#complete");
var highScoreEl = document.querySelector("#highscore");

//button varibles 
var startBtn = document.querySelector("#start"); 

//hidden cards to start only intro is showing
qu1El.style.display = "none";
qu2El.style.display = "none";
qu3El.style.display = "none";
qu4El.style.display = "none";
qu5El.style.display = "none";
completeEl.style.display = "none";
highScoreEl.style.display = "none";

//when start button is clicked
startBtn.addEventListener("click", qu1);

function qu1(event) {
    if (event.target.matches("button"))
    event.preventDefault();
    qu1El.style.display = "block";
    introEl.style.display ="none";
}

//time starts and qu1 is displayed and intro card is hid
//qu1 - 5: question answered correct, alert correct, incorrect take time away 
//when answer is right move on to the next question and hide the previous card
//after q5 display score; users will enter intials and submit score 
//score will save to high score page and to local storage once seelcted submit
//hide that card, then display highscores page 
//clear scores - erase table of scores stored
//go back - takes abck to start of quiz intro card 
