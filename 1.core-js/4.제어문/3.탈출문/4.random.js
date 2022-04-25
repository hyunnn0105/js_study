//난수(랜덤값) 생성
//Math.random() : 0과 1사이 - 0이상 ~ 1 미만

var rn = Math.random();
console.log(`랜덤값: ${rn}`);

if (rn > 0.66){
    console.log(`오늘 저녁은 삼겹살`);
}
else if (rn > 0.33){
    console.log(`오늘 저녁은 샐러드`);
}
else {
    console.log(`오늘 저녁은 물`);
}

console.log(`===================================================`)

//내림 ,올림, 반올림
console.log(Math.floor(3.789)); //내림
console.log(Math.ceil(5.289)); //올림
console.log(Math.round(7.2)); //내림

/*
    #1이상 10이하의 랜덤 정수 생성
    Math.random()                       -> 0.0 <= random <= 1.0
    Math.random() * 10                  -> 0.0 <= r <= 10.0
    Math.floor(Math.random() * 10)      -> 0 <= r <= 10
    Math.floor(Math.random() * 10)+1    -> 1 <= r <= 11
*/
console.log(`==================================================`);
var ri = Math.floor(Math.random() * 10) + 1;
console.log(`랜덤정수: ${ri}`);


// 117~163 사이의 랜덤정수
var i = Math.floor(Math.random() * 47) + 117;
//                  0.0 <= r <= 47

/*
    **중요**
    #랜덤정수 범위 공식
    - x이상 y이하의 랜덤정수
    -> Math.floor(Math.random() * (y(최댓값) - x(최소값) + 1)) + x(최소값)
*/

