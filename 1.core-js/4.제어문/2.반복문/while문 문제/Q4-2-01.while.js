// 범위의 총합 구하기
// A~B까지의 누적합

var x = +prompt(`첫번째 숫자: `);
var y = +prompt(`두번째 숫자: `);

//값 스위칭 - 주스 잔바꾸기
if (x > y){
    var t = x; // 빈 변수
    t = x;
    x = y;
    y = t;
}



var total = 0;
var n = x;
while (n <= y) {
    total += n;
    n++;
}
alert(`${x}~${y}까지의 누적 합 : ${total}`);
