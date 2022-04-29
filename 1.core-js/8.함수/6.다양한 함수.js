//함수정의부
// function add(n1,n2){
//     return n1 + n2;
// }

// 함수 정의 기본 - 이름이 sub인 함수처럼 씀 
var sub = function(n1,n2) {
    return n1 - n2;
};

//함수 이름이 길다면 함수를 변수에 담을 수 있음 
// var plus = add(10, 5);


//화살표함수
//셋 다 동일한 함수
function multifly (n1,n2) {
    return n1 * n2;
}

var multifly = function (n1,n2) {
    return n1 * n2;
}
//함수의 내용물이 return 하나일 경우 return 생략가능
var multifly = (n1,n2) => n1 * n2;

var sayNickName = function(nick) {
    console.log(`${nick}님 안녕`);
    return nick + '메롱' ;
}

//function 제거후 소괄호랑 중괄호 사이에 화살표 추가
var sayNickName = (nick) => {
    console.log(`${nick}님 안녕`);
    return nick + '메롱' ;
}

var hello = function() {
    console.log(`hello~`);
}

// 만약 함수의 코드가 한 문장이라면 중괄호 생략가능 - 소괄호 생략 XXX
var hello = () => console.log(`hello~`);

//중첩함수
function outer () {
    console.log('outer call');

    function inner() { //outer 함수의 전용함수 - 기능이 제한됨
        console.log('inner call');
    }

    inner();
    inner();
}
//재귀함수 (Recursive) - 자기자신을 부름 Like 무한루프
function countDown (n) {
    if (n < 0){return
    }
    console.log(`${n}!!`);
    countDown(n-1);
}

//var = copmute(4); // r = ?
//===========================================
//코드 실행부 - 함수로 감싸는게 good

//즉시실행함수 - name x : 익명함수
// (function () {}) ();

(function () {
    var a = 10, b =20;
    console.log(a+b);

    console.log(`======================================`);

    
    console.log(typeof sub);
    console.log(sub(10,3));
    console.log(typeof plus);
    // console.log(plus(20, 30));

    hello();
    hello();
    hello();

    console.log(`======================================`);

    outer();

    // inner(); 작동 XX
    countDown(3);
}) ();