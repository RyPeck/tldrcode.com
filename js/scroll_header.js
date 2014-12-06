$(window).scroll(function() {
	if ($(this).scrollTop() > 5) {
		$('.12u').addClass("sticky");
	}
	else{
		$('.12u').removeClass("sticky");
	}
});
