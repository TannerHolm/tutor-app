	$(document).ready(function() {
		setTimeout(function() {
      // Do something after 5 seconds
	$(".squares").each(function(index) {
    $(this).delay(400*index).animate({opacity: 1}, 600);
});
}, 2000);
	})

