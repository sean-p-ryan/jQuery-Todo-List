var input = document.getElementById("newToDo"); //selects input field
var newTodo = input.value;
var todoList = document.querySelector(".todoList ul"); //selects entire ul element in todo list
var completedList = document.querySelector(".completed ul"); //selects ul element in completed list
var completedDiv = document.querySelector(".completed"); //selects div with class "completed" for event delegation
var check = document.querySelector(".check"); //selects green check on todo in hover state
var todos = document.querySelector(".todoList"); //selects todo list
var completedTodos = document.querySelector(".completed"); //selects list of completed todos 
var completedButton = document.querySelector("#completedButton h1"); //selects "completed" button
var todoButton = document.querySelector("#todoButton h1"); //selects "todo" button

function createNewTodo() {
	var newLi = document.createElement("li");
	newLi.innerHTML = 
		"<li><span class = 'check'><i class='fa fa-check'></i></span> " 
		+ input.value
		+ "<span id='bangButton'><i class='fas fa-exclamation-circle'></i></span></li>";
	todoList.prepend(newLi);
};


//send data from input to new todo when return is pressed
input.addEventListener("keypress", (e) => {
	if (e.which === 13){	
		createNewTodo();
		input.value = "";
	}
});

//hides todo list and shows completed todos when "completed" button is pressed
completedButton.addEventListener("click", (e) => {
	todos.classList.add("hide");
	completedTodos.classList.remove("hide");
	completedButton.classList.remove("unselected");
	todoButton.classList.add("unselected");
});

//hides completed todos and shows todo list when "completed" button is pressed
todoButton.addEventListener("click", (e) => {
	completedTodos.classList.add("hide");
	todos.classList.remove("hide");
	todoButton.classList.remove("unselected");
	completedButton.classList.add("unselected");
});

//add completed todo to "completed" list when green check clicked
todoList.addEventListener("click", (e) => {
	if (e.target.classList.contains("check")){
		var newLi = document.createElement("li");
		completedList.prepend(newLi);
		var completedTodo = e.target.parentElement.textContent;
		newLi.innerHTML = "<li>" + completedTodo + "</li>";
		newLi.style.paddingLeft = "20px";
		var checkIcon = document.querySelector(".fa-check");
		var targetLi = checkIcon.closest("li");
		checkIcon.parentNode.parentNode.parentNode.removeChild(targetLi);	 
	} 
});












