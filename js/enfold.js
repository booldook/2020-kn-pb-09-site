/*********** 사전지식 ***********/


/*********** 전역변수 ***********/
var isWingShow = false;

/*********** 사용자정의 ***********/


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
	// mobile -> pc
	if($(this).outerWidth()	>= 768) {
		isWingShow = true;
		onWingClick();
	}

	// pc -> mobile
	if($(this).outerWidth() < 768) {
		
	}
}

/*********** 이벤트등록 ***********/
$(".bt-wing").click(onWingClick);
$(window).resize(onResize);