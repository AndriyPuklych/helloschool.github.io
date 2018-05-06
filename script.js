autoSlider();
var left = 0;
var timer;


function autoSlider(){
	timer = setTimeout(function(){
		var polosa = document.getElementById('polosa');
		left = left-128;
		if (left < -640){
			left = 128;
			clearTimeout(timer);
		}
		polosa.style.left = left+'px';
		autoSlider();
	}, 1500);
}