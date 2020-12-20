var highScoreInput = document.querySelector("#highscore-text");
var highScoreForm = document.querySelector("#highscore-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}

 highscoreForm.addEventListener("submit", function(event) {
    event.preventDefault();
    todos.push(highScoreInput.value); //taking the input from what users enter and pushing int into the array
    renderTodos(); //calling the function above with new updated values
 });