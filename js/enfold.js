// $(".navi-wrap > .navi")
// $(".navi-wrap").childrend(".navi")
$(".navi-wrap").find(".navi").hover(function(){
	$(this).find(".subs").stop().fadeIn(300);
	$(this).find(".bar").addClass("active");
}, function(){
	$(this).find(".subs").stop().fadeOut(300);
	$(this).find(".bar").removeClass("active");
});

$(".bt-lines").click(function(){
	if($(this).find(".line").eq(0).css("animation-name") === "line1") {
		$(this).find(".line").eq(0).css("animation-name", "line1-rev");
		$(this).find(".line").eq(1).css("animation-name", "line2-rev");
		$(this).find(".line").eq(2).css("animation-name", "line3-rev");
	}
	else {
		$(this).find(".line").eq(0).css("animation-name", "line1");
		$(this).find(".line").eq(1).css("animation-name", "line2");
		$(this).find(".line").eq(2).css("animation-name", "line3");
	}
});


/*
$(".bt-lines").click(function(){
	$(this).find(".line").eq(0).toggleClass("line1 line1-rev");
	$(this).find(".line").eq(1).toggleClass("line2 line2-rev");
	$(this).find(".line").eq(2).toggleClass("line3 line3-rev");
});
*/
/*
$(".bt-lines").click(function(){
	if(	$(this).find(".line").eq(0).hasClass("line1")	) {
		$(this).find(".line").eq(0).removeClass("line1").addClass("line1-rev");
		$(this).find(".line").eq(1).removeClass("line2").addClass("line2-rev");
		$(this).find(".line").eq(2).removeClass("line3").addClass("line3-rev");
	}
	else {
		$(this).find(".line").eq(0).removeClass("line1-rev").addClass("line1");
		$(this).find(".line").eq(1).removeClass("line2-rev").addClass("line2");
		$(this).find(".line").eq(2).removeClass("line3-rev").addClass("line3");
	}
});

$(".navi").click(function(){
	console.log(	$(this).hasClass("bor-rt")	);
});
*/