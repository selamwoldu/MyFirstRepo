$(document).ready(function () {
	
	$("form").submit(function(e){	
	
		 e.preventDefault();
		$("#result").html("");
		var word = $("#term").val();
		console.log(word + " ajax entry ")
		$.ajax({
			"url": "/find",
			"type": "POST",
			"data": { "word": word },
			"contentType":"application/x-www-form-urlencoded",
			"success": myAjaxSuccessFunction,
			"error": ajaxFailure
		});
		function myAjaxSuccessFunction(responseData) {
			// do something with the data
		//	alert(responseData.data)
			console.log(responseData + "ajax")
			var $ul = $("<ul>").appendTo($("#result"));
			//
			
			//
	        $.each(responseData, function(index, item) {
	            $("<li>").text((index+1)+"("+item.wordtype+") :: "+item.definition).appendTo($ul);
	        });
		}
		function ajaxFailure(xhr, status, exception) {
			console.log(xhr, status, exception);
		}
		});
});