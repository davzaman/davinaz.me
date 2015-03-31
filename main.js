var main = function() {
	var currentScroll = 0;
	var degree = 0;
	$(document).scroll(function() {
		var nextScroll = $(this).scrollTop();
		var currentSlide;
		function rotate(degree){
			$('#spokes').css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
			$('#spokes').css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
			$('#spokes').css({ '-o-transform': 'rotate(' + degree + 'deg)'});
			$('#spokes').css({ 'transform': 'rotate(' + degree + 'deg)'});
		}
		$('.slide').each(function() {
			var slidepos = $(this).offset().top;
			if(slidepos - 80 < currentScroll){
				$currentSlide = $(this);
			}
			var id = $currentSlide.attr('id');
			$('a, li').removeClass('active-nav');
			$("[href=#"+id+"] > li").addClass('active-nav');
		});
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

	$('a[href*=#]:not([href=#])').click(function() {
     	 var target = $(this.hash);  
     	 if (target.length) {
        	$('html,body').animate({
        	  scrollTop: target.offset().top
        	}, 875);
        	return false;
      	}
  	});
};

$(document).ready(main);