var main = function () {
	// Expand content
	$('.more').click(function () {
		$(this).parent().find('.extra-content').toggle(400);
	});

	// Show credits
	$('#credits').click(function () {
		$('#more-credits').toggle(400);
	});

	// Timestamp per line on terminal
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