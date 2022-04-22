
var num1 = +prompt('정수1');
var num2 = +prompt('정수2');
var num3 = +prompt('정수3');

if (num1 < num2 && num1 < num3){
    alert(`최솟값은 ${num1}입니다.`);
} 
else if (num2 < num1 && num2 < num3){
    alert(`최솟값은 ${num2}입니다.`);
}
else {
    alert(`최솟값은 ${num3}입니다.`);
}


//=======================================================
/*
var min = a;//-a가 0일때 //최소값 저장 변수
if (a < b) {
    if (a < c) {
        min = a;
    } else {
        min = c;
    }
} else {
    if (b < c) {
        min = b;
    } else {
        min = c;
    }
}

//풀이 2 - if가 계속해서 시도해야해서 if 두번 사용
var min = a;
if (b < min) min = b;
if (c < min) min = c;

alert(`최소값은 ${min}입니다.`);


var min = a;
if (b < min){
    min = b;
}
    

if (c < min){
    min = c;
}

alert(`최솟값은 ${min}입니다.`)
*/