

// 1. 중복선언 허용XX
let x = 10;
// let x = 100;     SyntaxError: Identifier 'x' has already been declared <- 중복선언 사용X
x = 100;
console.log(x);


// 2. 블록레벨 스코프 지원
let y = '안녕';
if (true){
    let y = '잘가'; //지역변수 취급 받음
}
console.log(y); //안녕이 뜸

// 3. 변수 호이스팅 문제 없음
f = 100;
console.log(f);

// var vs let, const



