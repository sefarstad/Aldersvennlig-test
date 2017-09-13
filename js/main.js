$( document ).ready(function() {
	$("#retur").hide();
    $("#test1").on('click', function(event) {
	  $('html, body').animate({scrollTop:$(this).position().top - 60}, 'slow');
		$("#retur").fadeIn();
	});
	/*$("#test2").on('click', function(event) {
	  $('html, body').animate({scrollTop:$(this).position().top - 160}, 'slow');
	});
	$("#test3").on('click', function(event) {
	  $('html, body').animate({scrollTop:$(this).position().top - 160}, 'slow');
	});*/
	
});
