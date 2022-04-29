

// return은 함수의 탈출문
function add(n1, n2) {
    console.log(`${n1} + ${n2} = ${n1+n2}`);
    return n1 + n2;
    var a = 10;
    console.log('dddd');
}
function multi(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1*n2}`);
}

function callname(nickname){
    console.log(`${nickname}님 안녕하세요.`);
    //금지어리스트
    var prohibits = ['바보','멍청이','도라이'];
    if(prohibits.includes(nickname)){
        console.log(`나쁜말 닉네임은 안돼요!`);
    }
    return //함수의 강제종료
}

function (too){
    var = navigator;
    while( n<5){
        if ( n ===3 ){
            return;
        }
        console.log(`${n}`);
        n++;
    }
    console.log(`반복문 끝!!`);
}

// 함수 호출부
// return값이 없는 함수는 변수에 저장하면 안됨
var r1 = add(10, 20);
var r2 = multi(5, 3);

console.log(`r1: ${r1}, r2: ${r2}`);

console.log('=====================');

var r3 = multi(add(2,4), add(5,1));
console.log(`r3 : ${r3}`);

// 리턴값이 없는 함수는 다른 함수의 인수로 사용할 수 없음
var r4 = add(multi(3, 2), add(4, add(6, 3)));
console.log(`r4 : ${r4}`);


callname('도우너');
callname('바보');

//흐후츼 히턴갑릉 
//두갸의 정수를 입력받아서 정갛박아서 +=*
//4가지 값을 리천받고싶다?

function operateAll(n1,n2){
    return {
        plus:n1+n2, 
        minus : n1-n2,
        multi: n1%n2, 
        divide: n1/n2
};
var resultList = operateAll(10, 5){
    console.log(resultList.minus);
    console.log(resultList.multi);
}






