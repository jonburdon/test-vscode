$(document).ready(function() {
 

	$("#buttoneffects1").click(function() {
		$("#par1").slideToggle("slow");
	});

	$("#buttoneffects2").mouseenter(function() {
		$("#par2").fadeTo("slow", 0.5).css("background-color","RebeccaPurple");
	});

	$("#buttoneffects2").mouseleave(function() {
		$("#par2").fadeTo("slow", 1.0).css("background-color","White");
	});

 	$("#stream1_btn").click(function() {
		//  $(".stream1").toggle();
		//  $(".stream1").toggle(1000);
		//  $(".stream1").show();
		 $(".stream1").removeClass('highlight_stream');
		 $(".stream2").removeClass('highlight_stream');
		 $(".stream3").removeClass('highlight_stream');
		$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").click(function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").on("click", function() {
		$("p").css("color","RebeccaPurple");
	});

	$("h2").mouseenter(function() {
		$("h2").css("background-color","LightCoral");
	});

	$("img").click(function() {
		$("p").show();
	});

}); 
