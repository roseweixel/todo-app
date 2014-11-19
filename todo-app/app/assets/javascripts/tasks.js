$(function(){

	// 1. bind our event
	$("#task_list").on("click", ".delete_task", function(e){
		e.preventDefault();
		e.stopPropagation();
	// 2. Fire an AJAX Request
		// Where is it going?
		// What type of request?
		var taskId = $(this).parents("li").data("item-id");
		var listId = $(this).parents("ul").data("list-id");
		var deleteURL = "/lists/"+listId+"/tasks/"+taskId;
		

		$.ajax(deleteURL, {
			type: "DELETE",
			dataType: "script"
		});
	})
	// $("span.delete_task").on("click", function(e){
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// // 2. Fire an AJAX Request
	// 	// Where is it going?
	// 	// What type of request?
	// 	var taskId = $(this).parents("li").data("item-id");
	// 	var listId = $(this).parents("ul").data("list-id");
	// 	var deleteURL = "/lists/"+listId+"/tasks/"+taskId;
		

	// 	$.ajax(deleteURL, {
	// 		type: "DELETE",
	// 		dataType: "script"
	// 	});
	// });

	$("form#new_task").on("submit", function(e){
		e.preventDefault();
		var form_method = $(this).attr("method");
		var form_action = $(this).attr("action");

		$.ajax(form_action, {
			type: form_method,
			data: $(this).serialize(),
			dataType: "script"
		})
	});
});


