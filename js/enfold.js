/*********** 사전지식 ***********/


/*********** 전역변수 ***********/
var isWingShow = false;

/*********** 사용자정의 ***********/


/*********** 이벤트콜백 ***********/
function onWingClick() {
	if(isWingShow) {
		isWingShow = false;
	}
	else {
		isWingShow = true;
		$(".wing-wrap").css("display", "block");
		setTimeout(function(){
			$(".wing-wrap").css("background-color", "rgba(0, 0, 0, 0.4)");
		}, 0);
	}
}

/*********** 이벤트등록 ***********/
$(".bt-wing").click(onWingClick);