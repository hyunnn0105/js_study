
function makeLine() {
    console.log(`=================================================`);
}

//원의 넓이를 구하는 상황 많음 : pi * r **2
var pi = 3.14158265;

//반지름이 5인 원의 넓이
var circle1 = pi * 5 ** 2;

//~~~~~~~~~~~~~~~

//반지름이 17인 원의 넓이
var circle2 = pi * 17 *2;

//원의 넓이를 구해주는 함수 정의
function calcAreaCircle (r) {
    return pi * r ** 2;
}

var result1 = calcAreaCircle(5);
console.log(result1);

makeLine();

var result2 = calcAreaCircle(17);
console.log(result2);
