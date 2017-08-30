$(document).ready(function(){
	$('.carousel').carousel({
		interval: 5000
	});

	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});

	// mobile nav toggle
	$('.navbar-toggle').on('click', function (event) {
		event.preventDefault();
		$('.navbar-collapse').toggleClass("open");
	});
});


// scroll function
function scrollToID(id, speed){
	var offSet = 0;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('.navbar-collapse');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}