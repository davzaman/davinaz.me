var main = function () {
	$('#tabs li').click(function () {
		$('#tabs').find('*').removeClass('active-tab');
		$('#shell-body').find('div').removeClass('active-content');
		$(this).addClass('active-tab')
		$('#shell-body').find('#' + $(this).attr('name')).addClass('active-content');
	});

	$('.resizable').resizable();
 
  var i = $("#tabs").find('*').length;
  $('#tabs').find('*').each(function () {
    $(this).css('z-index', i);
    i--;
  });
};

$(document).ready(main);

// ref: https://www.satellytes.com/blog/twinkling-night-sky-with-shooting-stars-made-in-svg/
const STAR_DATA = generateStarData();

function createStar({x, y}, index, debug) {
  const starParallax = document.createElementNS("http://www.w3.org/2000/svg", 'g');
  
  const starTranslate = document.createElementNS("http://www.w3.org/2000/svg", 'g');
  starTranslate.setAttribute('transform', `translate(${x} ${y})`);
  
  const radius = debug ? 10 : 1;
  const delay = 100 + 500 * Math.random();
  const duration = 3000 + Math.random() * 4000;
  const brightness = 0.7 + Math.random() * 0.3;
  

  const star = document.createElementNS("http://www.w3.org/2000/svg", 'circle');  
  star.setAttribute('r', radius);
  star.classList.add('star');
  
  star.style.setProperty('--star-animation-delay', `${delay}ms`);
  star.style.setProperty('--star-animation-duration', `${duration}ms`);
  star.style.setProperty('--star-animation-glow-duration', `10000ms`);
  star.style.setProperty('--star-brightness', `${brightness}`);

  starTranslate.appendChild(star);
  starParallax.appendChild(starTranslate);
  
  return starParallax;
}


function createNightSky({container, debug, starReference}) {
 STAR_DATA.forEach((data, index) => {
    const star = createStar(data, index, debug);
    container.appendChild(star);
 })
}
  
const starGroup = document.getElementById('starGroup');

createNightSky({container: starGroup, data: STAR_DATA});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    // var h = $(window).height() - 50;
    // var w = $(window).width() - 50;
    var h = screen.height - 50;
    var w = screen.width - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
	
    return {"x": nw, "y": nh};    
    
}

// this is here to make the actual code more accessible- will be avaialble at the top through hoisting
function generateStarData() {
  return Array(800).fill().map(() => makeNewPosition());
};