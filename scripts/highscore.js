
/*var todoCountSpan = document.querySelector("#todo-count");

var scores = [];

//init();



//function renderTodos() {
  // Clear todoList element and update todoCountSpan
   todoList.innerHTML = "";
  //todoCountSpan.textContent = todos.length;

  //Render a new li for each todo will need this based on submit 

    
    button.textContent = "Complete";

  //}


function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedScores = JSON.parse(localStorage.getItem(""));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedScores !== null) {
    scores = storedScores;
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("scores", JSON.stringify(scores));
}

// When form is submitted...
//todoForm.addEventListener("submit", function(event) {
  //event.preventDefault();

  var highscoreText = highscoreInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  scores.push(highScoreInput);
  highScoreInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeScores();
  renderScores();
});

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});