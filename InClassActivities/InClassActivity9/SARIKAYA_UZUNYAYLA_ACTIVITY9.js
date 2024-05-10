$(document).ready(function() {
	$("#image_list a").each(function() {
		var swpImg = new Image();
		swpImg.src = $(this).attr("href");
	});
	
	$("#image_list a").click(function(evt) {
		evt.preventDefault();

		var url = $(this).attr("href");
		var capt = $(this).attr("title");

		$("#caption, #image").fadeOut(1000, function() {
			
			$("#image").attr("src", url);
			$("#caption").text(capt);

			$("#caption, #image").fadeIn(1000);
		});
	});

	$("li:first-child a").focus();
}); 