/*********** 사전지식 ***********/
/*
for(var i=0; i<$(".loader").length; i++) {
	console.log(	$(".loader").eq(i).parent()	);
	console.log(	$(".loader").eq(i).parents()	);
}

loaderInit();
function loaderInit() {
	$(".loader-wrap").each(function(){
		var $loaderWrap = $(this);
		var $loader = $(this).find(".loader");
		var $img = $(this).find("img");
		console.log(	$img.eq(0).height(), $img.eq(1).height()	);
		var len = $img.length;	//2
		var cnt = 0;
		$loader.show();
		$img.on("load", function(){
			cnt++;
			if(cnt == len) {
				console.log(	$img.eq(0).height(), $img.eq(1).height()	);
				$loader.hide();
				// main-wrap을 위한 곳
				if($loaderWrap.hasClass("main-wrap")) {
					mainInit();
					mainPagerInit();
					onMainLeave();
				}
			}
		});
	});
}
*/

/*********** 전역변수 ***********/
var scTop = 0;
var isWingShow = false;

var $mainSlide = $(".main-wrap .slide");
var mainNow = 0;
var mainLast = $mainSlide.length - 1;
var mainSpeed = 500;
var mainGap = 3000;
var mainInterval;
var mainPager = {off: '○', on: '●'};

var $aboutSlide = $(".about-wrap .slide");
var aboutNow = 0;
var aboutLast = $aboutSlide.length - 1;
aboutInit();


/*********** 사용자정의 ***********/
function mainInit() {
	$(".main-wrap .slides").empty();
	$($mainSlide[mainNow]).appendTo(".main-wrap .slides").removeClass("slide");
}

function mainPagerInit() {
	for(var i=0, html; i<=mainLast; i++) {
		if(mainNow == i) html = '<span class="pager">'+mainPager.on+'</span>';
		else html = '<span class="pager">'+mainPager.off+'</span>';
		$(html).appendTo(".main-wrap .pagers").click(onMainPager);
	}
}

function mainAni() {
	$(".main-wrap .pager").html(mainPager.off);
	$(".main-wrap .pager").eq(mainNow).html(mainPager.on);
	$($mainSlide[mainNow]).prependTo(".main-wrap .slides")
	.css("opacity", 0)
	.addClass("slide")
	.stop()
	.animate({"opacity": 1}, mainSpeed, mainInit);
}

function pfResize() {
	var imgHeight = $(".pf").eq(0).find("img").height();
	$(".pf").height(imgHeight * 0.8);
	$(".pf").find("img").css("margin-top", (-imgHeight * 0.1)+"px");
}

function aboutInit() {
	$(".about-slide").height($aboutSlide.eq(0).height());
}

function aboutAni() {
	$aboutSlide.css("opacity", 0);
	$aboutSlide.eq(aboutNow).css("opacity", 1);
}

/*********** 이벤트콜백 ***********/
function onWingClick() {
	if(isWingShow) {
		isWingShow = false;
		$(".wing-wrap").css("background-color", "rgba(0, 0, 0, 0)");
		$(".wing-conts").css("transform", "translateX(350px)");
		setTimeout(function(){
			$(".wing-wrap").css("display", "none");
		}, 300);
	}
	else {
		isWingShow = true;
		$(".wing-wrap").css("display", "block");
		setTimeout(function(){
			$(".wing-wrap").css("background-color", "rgba(0, 0, 0, 0.4)");
		}, 0);
		setTimeout(function() {
			$(".wing-conts").css("transform", "translateX(0)");
		}, 300);
	}
}

function onResize() {
	pfResize();
	aboutInit();
	// mobile -> pc
	if($(this).outerWidth()	>= 768) {
		isWingShow = true;
		onWingClick();
	}

	// pc -> mobile
	if($(this).outerWidth() < 768) {
		
	}
}

function onScroll() {
	/*
	scTop = $(this).scrollTop();
	$(".header").css("background-color", "white");
	if(scTop > 200) $(".header").css("background-color", "beige");
	if(scTop > 1000) $(".header").css("background-color", "orange");
	if(scTop > 2000) $(".header").css("background-color", "red");
	*/
}

function onMainPrev() {
	mainNow = (mainNow == 0) ? mainLast : mainNow - 1;
	mainAni();
}

function onMainNext() {
	mainNow = (mainNow == mainLast) ? 0 : mainNow + 1;
	mainAni();
}

function onMainPager() {
	mainNow = $(this).index();
	mainAni();
}

function onMainHover() {
	clearInterval(mainInterval);
}

function onMainLeave() {
	mainInterval = setInterval(onMainNext, mainGap);
}

function onMainLoaded(){
	$(this.elements[0]).find(".loader").hide();
	mainInit();
	mainPagerInit();
	onMainLeave();
}

function onPfsLoaded(){
	pfResize();
	$(this.elements[0]).masonry({
		itemSelector: '.pf',
		columnWidth: '.pf-sizer',
		percentPosition: true
	});
}

function onAboutPrev() {
	aboutNow = (aboutNow == 0) ? aboutLast: aboutNow - 1;
	aboutAni();
}

function onAboutNext() {
	aboutNow = (aboutNow == aboutLast) ? 0: aboutNow + 1;
	aboutAni();
}

function onTwitterClick() {
	// 1. 현재창에 링크
	// location.href = '//twitter.com';
	
	// 2. 새창에 링크
	window.open('//twitter.com');
}

/*********** 이벤트등록 ***********/
$(".bt-wing").click(onWingClick);
$(window).resize(onResize);
$(window).scroll(onScroll);

$(".main-wrap .bt-prev").click(onMainPrev);
$(".main-wrap .bt-next").click(onMainNext);
$(".main-wrap").hover(onMainHover, onMainLeave);
$(".main-wrap").imagesLoaded(onMainLoaded);

$(".pf-wrap .pfs").imagesLoaded(onPfsLoaded);

$(".about-slide .bt-prev").click(onAboutPrev);
$(".about-slide .bt-next").click(onAboutNext);

$(".footer .twitter").click(onTwitterClick);
