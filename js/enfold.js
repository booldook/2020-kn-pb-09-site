// $(".navi-wrap > .navi")
// $(".navi-wrap").childrend(".navi")
$(".navi-wrap").find(".navi").hover(function(){
	$(this).find(".subs").stop().fadeIn(300);
}, function(){
	$(this).find(".subs").stop().fadeOut(300);
});