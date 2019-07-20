$(document).ready(function() {
	// Smooth Scroll
	$('.nav-link').click(function() {
	    var section = $(this).attr('href');
	    $('html').animate({
	      scrollTop: $(section).offset().top - 70
	    }, 750);
	});
});

$(document).scroll(function() {
	$('#navbarCollapse').collapse('hide');
	
	var headheight = $('#headerCarousel').height();
	var scroll = $(this).scrollTop();
	if(scroll > (headheight-70)){
		$('.navbar').removeClass('bg-0').addClass('bg-primary');
	}else {
		$('.navbar').removeClass('bg-primary').addClass('bg-0');
	}
});