//used to say what position the user is at in the test 
var pos = 0; 
//stores answers correct 
var correct = 0; 
var timeleft; 
var score = timeleft;
var downloadTimer; 
//test question and answer
var test;
//will refrence my question and choices
var question; 
var choice; 
var choices; 
//answers that the user will see as poitions to pick from 
var uAns1;
var uAns2; 
var uAns3; 
var uAns4; 
//question and answer array
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      ans1: "1. strings",
      ans2: "2. booleans",
      ans3: "3. alerts",
      ans4: "4. numbers",
      answer: "3",
    },
    {
      question: "The condition in an if / else statement is enclosed within ______.",
      ans1: "1. quotes",
      ans2: "2. curly brackets",
      ans3: "3. parentheses",
      ans4: "4. square brackets",
      answer: "2"
    },
    {
      question: "Arrays in JavaScript can be used to store ______.",
      ans1: "1. numbers and strings",
      ans2: "2. other arrays",
      ans3: "3. booleans",
      ans4: "4. all of the above",
      answer: "4" 
    },
    {
      question: "String values must be enclosed within ______ when being assigned to variables.",
      ans1: "1. commas",
      ans2: "2. curly brackets",
      ans3: "3. quotes",
      ans4: "4. parentheses",
      answer: "3"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      ans1: "1. JavaScript",
      ans2: "2. Terminal/Bash",
      ans3: "3. for loops",
      ans4: "4. console.log",
      answer: "1"
    }
  ];
 

//Function created so I dont have to write getElementById a bunch of times
function get (x) {
    return document.getElementById(x); 
  }

//Function to trigger on start 
function startTimer(){
  //countdown to be modfiied 
   timeleft = 100;
    downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        get("countdown").innerHTML = "Fail";
      } else {
        get("countdown").innerHTML = "Time: " +timeleft;
      }
      timeleft -= 1;
    }, 1000);
  }


function testEvent(event) {
    if (event.target.matches("button"))
    event.preventDefault();
    get("questionbox").style.display="block";
    get("intro").style.display="none";
    startTimer();
}

//score button prep
var submitScore = document.createElement("INPUT");
submitScore.setAttribute("type", "submit");


function highscoreDisplay(){
  get("highscorescard").style.display="block";
  get("intro").style.display="none"; 
  get("questionbox").style.display="none"; 
  clearInterval(downloadTimer);
}


  //its reading this function, its jut not working how I want it to when I click submit on that form. need to work on that. 
  function highscore() {
    console.log("Jac this is working");
    alert("Submit button clicked!");
    alert()
  
   // if (clicked_id === true){
   // get("name").innerHTML = final; 
    // get("highscorescard").style.display="block";
    // get("intro").style.display="none"; 
    // get("questionbox").style.display="none";
   
    // return true;
  }

//Getting my quiz in the correct order and linking the answers to varibles 
function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      // resets the variable to allow users to restart the test
      clearInterval(downloadTimer);
      get("countdown").innerHTML = "Time: " +timeleft;
      test.innerHTML = "<h2>Your score is: " +timeleft + "<br> "+correct+" of "+questions.length+" questions correct</h2><br><form id='submitScore'><div class='form-row align-items-center'><div class='col-auto'><label class='sr-only' for='inlineFormInput'>Enter Initials: </label><input type='text' class='form-control mb-2' id='inlineFormInput'></div><div class='col-auto'><button type='submit' class='btn btn-primary mb-2' id='submitBtn' onclick='highscore()'>Submit</button></div></div></form>"
      pos = 0;
      correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    }
    //These match up to my array
    question = questions[pos].question;
    uAns1 = questions[pos].ans1;
    uAns2 = questions[pos].ans2;
    uAns3 = questions[pos].ans3;
    uAns4 = questions[pos].ans4;
    // display the question
    test.innerHTML = "<h3>"+question+"</h3><br><br>";
    //Display the answer options
    //this.id calls out the button value inside the check answer function. 
    //id='x' matches the answer: x in the object to check 
    //uAns1 - gives the visual of what the answer is, but the id assigns the value to that button 
    test.innerHTML += "<button type='button' class='btn btn-info' onclick='checkAnswer(this.id)' id='1'>" +uAns1+ "</button><br><br>"; 
    test.innerHTML += "<button type='button' class='btn btn-info' onclick='checkAnswer(this.id)' id='2'>" +uAns2+ "</button><br><br>"; 
    test.innerHTML += "<button type='button' class='btn btn-info' onclick='checkAnswer(this.id)' id='3'>" +uAns3+ "</button><br><br>"; 
    test.innerHTML += "<button type='button' class='btn btn-info' onclick='checkAnswer(this.id)' id='4'>" +uAns4+ "</button><br>"; 
  }
 
    //this checks whatever button was clicked value and provides a response based on array/object positions 
    function checkAnswer (clicked_id){
    choice = clicked_id;
    if (choice == questions[pos].answer){
      correct++;
    }
    else{ 
    //  correct--;
      (timeleft = timeleft - 20); 
      get("countdown").innerHTML = "Time: " +timeleft;
    }
    //alert(questions[pos].answer);
    pos++;
    console.log(correct);
    renderQuestion(); 
  }

  
  get("questionbox").style.display="none";//hidden questions card 
  get("highscorescard").style.display="none";//hidden highscores card 
  
  var gobackBtn = get("goback");

  var startBtn = get("start"); 
  startBtn.addEventListener("click", testEvent);
  window.addEventListener("load", renderQuestion);

  //will need to be pulled from submit
  var highscoreCard = document.getElementById("higscorecard");
  var highscoreList = document.getElementById("highsorelist");
  var clearButton = document.getElementById("clear", clearScores());
  function clearScores() {
    if (clearButton === true){
      highscoreInput.appendChild(td)=" ";
    }
  };
/*
Varibles Needed:
position to show current postion 
number correct 
var to html: test and test status
question 
choice options
choices 
for each answer 

Array with objects needed:
    Question: gives the question
    ans1: gives the answers 
    ans2
    ans3
    ans4
    answer: gives actual answer to refrence 


function to refrence how to return elements to the document 

function for rendering the question with the answers
each answer will be a button linked with an id for a value to match the answer in the array 

function to check answer 

re-render question


will need a start screen before
a score page
a highscore list 
store to local storage 
able to clear socres on local storage and navigate back to start 
*/