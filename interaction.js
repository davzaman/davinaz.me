$(document).ready(function () {
	$('.slide').each(function () {
		var $bgobject = $(this);
		$(window).scroll(function(){
			var yPos = -(window.scrollTop() / bjobject.data('speed'));
			var coords = '50% ' + yPos + 'px';
			bgobject.css({background-position: coords});
		});
	});
});