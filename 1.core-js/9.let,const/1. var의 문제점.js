

// 1. 변수의 중복선언 허용
var x = 10;
var x = 100;

console.log(x);


//2. 블록레벨 스코프 지원 XX
var y = '안녕';
if (true){
    var y = '잘가'; //지역변수 취급XX 
}
console.log(y); //안녕이 나와야함 but '잘가'가 프린트됨

console.log(`=======================================================`);

for (var i = 0; i < 3; i++) {

}
console.log(`i : ${i}`);



//3.변수 호이스팅
//변수가 자동적으로 설정하는 것을 도와줌
f = 100;
console.log(f);
