var main = function () {
	$('.more').click(function () {
		$(this).parent().find('.extra-content').toggle(400);
	});

	date = new Date(Date.now());
	time =   date.getHours() + ":" + date.getMinutes();
	$('.timestamp').append('[' + time + ']');

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