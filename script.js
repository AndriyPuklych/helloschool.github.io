
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
