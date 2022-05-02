var z = 'global z'; //전역변수

function outer () {
    var y = 'outer local y'; //지역변수
    var z = 'outer local z';
    console.log(`함수 내부 : ${z}`);
}
f //전역변수 참조 - 메모리에 지역변수 존재XX
bar();
console.log(`함수 호출 후 : ${z}`); //함수 호출 후 에도 전역변수 값 사용

//===== 임시할인률변수 - 함수 만들어서 활용가능 =====

var x = 'global x';

outer('outer param x');

// 사이트 전체 정책적 할인율
var saleRate = 0.1; //전역변수

// 코드 400줄 ~~~~

// 임시이벤트로 할인율을 1시간동안만 20퍼로 상승

function eventSale() {
    var saleRate = 0.2; //임시 할인율변수    
}
function vipSalePolicy() {
    var saleRate = 0.3;
}

// 코드 500줄 ~~~ 
console.log(saleRate);

