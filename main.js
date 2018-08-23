var main = function () {
	$('.more').click(function () {
		$(this).parent().find('.extra-content').toggle(400);
	});

	// $('#resume').click(function(event) {
	// 	event.preventDefault();
	// 	window.location.href = 'files/DavinaZ_resume.pdf'
	// });

	// $('#cv').click(function(event) {
	// 	event.preventDefault();
	// 	window.location.href = 'files/DavinaZ_cv.pdf'
	// });
};

$(document).ready(main);