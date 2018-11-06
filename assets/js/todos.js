//Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on delete a particular todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(100, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Add a new todo
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13)
	{
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type = 'text']").fadeToggle();
})