//한줄주석
// 제이쿼리 선언

// 화면을 열었을 때, 다음과 같은 일들이 일어나라

$(document).ready(function () {

    // 실행문 작성
    // 클래스 toggle을 클릭했을때, 클래스 gng가 슬라이드 Toggle되어라

    $('.toggle').click(function(){
        $('.gnb').slideToggle()
    })
})