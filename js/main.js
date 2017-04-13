$(document).ready(function(){
	$('.carousel').carousel({
		interval: 5000
	});

	/*$('.nav a').click(function(e) {
		$('.content-row .contents').hide();
	    var target = '#' + $(this).data('target');
	    $(target).show();
	})*/

	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});

	// scroll to top action
	/*$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});*/

	// mobile nav toggle
	$('.navbar-toggle').on('click', function (event) {
		event.preventDefault();
		$('.navbar-collapse').toggleClass("open");
	});
});


// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('.navbar-collapse');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}