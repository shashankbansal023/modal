$(document).ready(()=>{

	$("#myModal").hide();

	$("#myBtn").click(function(){
		$("#myModal").show();
		$("body").addClass('highlight');
	})

	$(".closeBtn").click(function(){
		$("#myBtn").show();
		$("#myModal").hide();
		$("body").removeClass('highlight');
	})	

})

