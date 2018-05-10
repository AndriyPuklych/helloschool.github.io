
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
autoSlider();
var left = 0;
var timer;


function autoSlider(){
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
