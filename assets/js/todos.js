// $("ul").on("click", "li", function(){
// 	$(this).toggleClass("completed");
// });

//add new todo to list when enter/return is pressed
$("input[type='text']").on("keypress", function(e){
	if(e.which === 13){
		//make new li as last child of ul with text set to user inpput
		$(".todoList > ul").prepend(
			"<li><span><i class='fa fa-check'></i></span> " 
			+ $("#newToDo").val() 
			+ "<span id='bangButton'><i class='fas fa-exclamation-circle'></i></span></li>");
		//remove text from inut
		$(this).val("");
		//make new li as last child of ul in completed todos
	};
});

//click on check icon to delete todo and move to "completed"
$("ul").on("click", ".fa-check", function(e){
	$(this).parent().fadeOut(500, function() {
		$(this).parent().remove();
		$(".completed > ul").prepend("<li> " + $(this).parent().text() + "</li>").css("margin-left", "20px");
	});
	e.stopPropagation(); 
});

$("ul").on("click", "#bangButton", function(e){
	//display top priority text
	 $(".topPriority").removeClass("hide");
	 //push todo into top priority text
	 var topPriority = $(this).parent().text();
	 $(".topPriorityText").text(topPriority)
});

//add or remove "add new todo" input when + icon is clicked
$("#plus").on("click", function(){
	$("input[type='text']").fadeToggle();	
});

//hide todo list and show completed todos when "completed" is clicked
$("#completedButton").on("click", function(e){
	$(".todoList").addClass("hide");
	$(".completed").removeClass("hide");
	$("#completedButton h1").removeClass("unselected");
	$("#todoButton h1").addClass("unselected");
});

//hide completed todos and show todo list when "todo list" is clicked
$("#todoButton").on("click", function(e){
	$(".todoList").removeClass("hide");
	$(".completed").addClass("hide");
	$("#completedButton h1").addClass("unselected");
	$("#todoButton h1").removeClass("unselected");
});

//show "top priority" text when exclamation is clicked






