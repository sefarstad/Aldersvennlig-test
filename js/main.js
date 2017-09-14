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
	 $("#ad1f").addClass("input-valid");
	});

	$("#a2").on('click', function(event) {
	 $("#ad2f").val("Storo Storsenter");
	 $(".ad2").slideUp();
	 $("#ad2f").addClass("input-valid");
	});

	$( ".dateclass" ).focusout(function() { 
		if($(".dateclass").val()) {
			$(".dateclass").addClass("input-valid");
		}
	});
	$( "#timeclass1" ).focusout(function() { 
		if($("#timeclass1").val()) {
			$("#timeclass1").addClass("input-valid");
		}
	});
	$( "#timeclass2" ).focusout(function() { 
		if($("#timeclass2").val()) {
			$("#timeclass2").addClass("input-valid");
		}
	});

	/*$("#test2").on('click', function(event) {
	  $('html, body').animate({scrollTop:$(this).position().top - 160}, 'slow');
	});
	$("#test3").on('click', function(event) {
	  $('html, body').animate({scrollTop:$(this).position().top - 160}, 'slow');
	});*/
	
});
