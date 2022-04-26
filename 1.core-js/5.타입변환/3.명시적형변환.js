
//명시적 문자열 변환

var a = 10, b = 20;

// var result = '' + a + b; //빈 스트링 넣어서 해결 - 
// var result = String(a) + String(b); 생성자 함수
var result = a.toString() + b.toString() // toString 매서드 사용

console.log(result);

console.log(`==================================`);

var m = '10', n='5.5';
var result2 = +m + +n;
// var result2 = Number(m) + Number(n);
// var result2 = parseInt(m) + parseFloat(n); 문자 안에 실수 있으면 parseFloat

console.log(result2);


//명시적 논리 변환

var logit = undefined;

var result3 = Boolean(logit);
var result3 = !!logit;

console.log(result3);

