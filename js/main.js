$( document ).ready(function() {
    $("#test1").on('click', function(event) {
	  $('html, body').animate({scrollTop:$(this).position().top - 160}, 'slow');
	});
	/*$("#test2").on('click', function(event) {
	  $('html, body').animate({scrollTop:$(this).position().top - 160}, 'slow');
	});
	$("#test3").on('click', function(event) {
	  $('html, body').animate({scrollTop:$(this).position().top - 160}, 'slow');
	});*/
	
});
