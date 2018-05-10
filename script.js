
function wResize(){
	$("header").css("height", $(window).height());
};
wResize();
$(window).resize(function(){
	wResize()
});

/*$("wrapper .tab").click(function(){
	$("wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
*/
/*autoSlider();
var left = 0;
var timer;
*/

/*function autoSlider(){
	timer = setTimeout(function(){
		var polosa = document.getElementById('polosa');
		left = left-128;
		if (left < -256){
			left = 128;
			clearTimeout(timer);
		}
		polosa.style.left = left+'px';
		autoSlider();
	}, 1500);
}
var slider = document.getElementById('slider');
// если наведёшь на слайдер, то он остановится
slider.onmouseover = function() {
    clearTimeout(timer);
};
// если уберешь мышку со слайдера, он вновь запуститься
slider.onmouseout = function() {
    autoSlider();
};﻿*/

var toTop = 0;
function autoPlay(){
  timer = setTimeout(function(){
    var row = document.getElementById('row');
    toTop = toTop - 128;
    if (toTop < -512){
      toTop = 128;
      clearTimeout(timer);
      row.onmouseover = clearTimeout(timer);
      }
  row.style.top = toTop +'px';
  autoPlay();
  }, 1500);
}
autoPlay();

var slider = document.getElementById('slider');
// если наведёшь на слайдер, то он остановится
slider.onmouseover = function() {
    clearTimeout(timer);
};
// если уберешь мышку со слайдера, он вновь запуститься
slider.onmouseout = function() {
    autoSlider();
};﻿