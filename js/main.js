$( document ).ready(function() {
	$("#retur").hide();
	$(".ad1").hide();
	$(".ad2").hide();
    $("#test1").on('click', function(event) {
	  $('html, body').animate({scrollTop:$(this).position().top - 60}, 'slow');
	  if ($("#test1").is(':checked')) {
			$("#retur").slideToggle();
		}
		else {
			$("#retur").slideToggle();
		}
	});
	$( "#ad1f" ).focus(function() { 
		$(".ad1").slideDown();
	});
	$( "#ad2f" ).focus(function() { 
		$(".ad2").slideDown();
	});
	$( "#ad1f" ).focusout(function() { 
		$(".ad1").slideUp();
	});
	$( "#ad2f" ).focusout(function() { 
		$(".ad2").slideUp();
	});

	$("#a1").on('click', function(event) {
	 $("#ad1f").val("Sogn frivillighetssentral");
	 $(".ad1").slideUp();
	});

	$("#a2").on('click', function(event) {
	 $("#ad2f").val("Storo Storsenter");
	 $(".ad2").slideUp();
	});


	/*$("#test2").on('click', function(event) {
	  $('html, body').animate({scrollTop:$(this).position().top - 160}, 'slow');
	});
	$("#test3").on('click', function(event) {
	  $('html, body').animate({scrollTop:$(this).position().top - 160}, 'slow');
	});*/
	
});
