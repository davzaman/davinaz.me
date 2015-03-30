var rotate = function() {

}

var main = function() {
	var currentScroll = 0;
	var degree = 0;
	$(document).scroll(function() {
		var nextScroll = $(this).scrollTop();
		function rotate(degree){
			center: ["50px", "100px"];
			$('#spokes').css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
			$('#spokes').css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
		}
		if(nextScroll > currentScroll){
			//downward scrolling
			degree += (nextScroll - currentScroll);
			rotate(degree);
		}
		else {
			degree -= (currentScroll - nextScroll);
			rotate(degree);
		}
		currentScroll = nextScroll;
	});
};

$(document).ready(main);