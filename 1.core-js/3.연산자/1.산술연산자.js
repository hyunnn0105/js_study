
//s나눗셈연산과 나머지
console.log(27/5); 
//js는 정수의 개념이 없다 실수의 나눗셈이  적용됨
console.log(27 % 5); // 나눗셈의 나머지 값

// 나눗셈 뒤의 숫자가 앞보다 크면 앞이 나머지다
console.log(5 % 4);
console.log(4 % 10); 
console.log(7 % 8);

//0으로 나눌 수 없다.
console.log(0 % 255); // 몫0 나머지0 산술불가
console.log(200 % 0);  //산술불가능

var num1 = 8, num2 = 5;

// 계산도 가능
console.log(num1 % num2);

//거듭제곱연산자(**) - ES6+
console.log(num1 ** 2);



//=====================================================================

//증감연산자 (++, --) : 단항 연산자(항이 하나)
// 1 증가 , 1 감소
var x = 3;
x++;
++x;
x--;

console.log(`x: ${x}`);

// 전위연산 (prefix), 후위연산(postfix)
//뒤에 붙으면 늦게하고 앞에 붙으면 빨리함

var a = 10;
var b = ++a; //11

console.log(`a:${a}, b: ${b}`);

// '='이 가장 늦음, a++ < * 곱하기 연산의 속도가 더 빠름
var c = 5;
var d = ++c * 2; // 6, 12
console.log(`c:${c}, d:${d}`);

// 연산의 결과로 a,b,c,d,e 값 구하기

var e = --d + c++ *d;
        // 12      6   11

//a11 b11 c 6 

var a = 1,b = 1;

var c = ++a; //2
var d = b++; //1 - '='은 가장 늦게 계산됨

// var a = 2;
// var x = 1 + (a *=2);
