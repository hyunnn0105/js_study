
var x = 10;
x += 5; //x = x+5; x에 5를 더해서 대입해라
x -= 3;
x *= 2;
x /= 4; // 나누기
x %= 4;
x **= 3;


console.log(`x:${x}`);

var y = 5; // +5
y =+ 3; // +3 덧셈이 아니라 대입이 됨
console.log(`y:${y}`);


// z += 4; // z = z(undifined) + 4 초기값+선언이 먼저 필요함!!
// console.log(`z:${z}`);


//문자열과 다른 타입의 덧셈 :결합연산
console.log('10'+ 20); //이어 붙임

var num = 7;
num += 1; // 연산횟수 1회
num -= 1; // num = num-1; 연산횟수 2회

var aa = 2;
var xx = 1+ (aa *= 2);

console.log(`aa:${aa}, xx:${xx}`); // a==4, b==5
