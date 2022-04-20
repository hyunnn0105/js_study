 // === 동등연산자

var decimal = 100; //숫자타입변수

//typeof 연산자 :변수에 저장된 값의 타입을 알려줌
console.log(typeof decimal);

var float = 3.14; //실수-> 숫자타입
console.log(typeof float);

//js는 모든 숫자데이터를 실수값으로 처리한다
console.log(10/4); //(10.0/4.0)

//0b - 2진수 저장할때 앞에 쓰기
var binary = 0b1001; //2진수값 저장
console.log(binary); //10진수로 자동 변환됨

//NaN : 산술연산 불가능을 표현하는 값
console.log(10/'hi'); //출력시 NaN으로 나타냄
