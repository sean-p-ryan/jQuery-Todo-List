$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on "x" to delete todo

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});


$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//make new li as last child of ul with text set to user inpput
		$("ul").append("<li><span>X</span> " + $("#newToDo").val() + "</li>");
		//remove text from inut
		$(this).val("");
	};
});
