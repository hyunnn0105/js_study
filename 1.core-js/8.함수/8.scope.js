var x = 10; //전역변수 -함수 밖에서 선언

/*
    함수 밖에서 선언된 변수는 전역변수이고 프로그램 전체에서 사용 가능
    함수 안에서 선언된 변수는 지역변수이고 함수 안에서만 사용가눙
    함수 호출이 끝나면 메모리에서 자동 삭제됨
*/

function foo () {
    var y = 3; //지역변수 - 함수 안에서 선언
    console.log(`y : ${y}`);
    var z = x + y //가능
}

console.log(`x : ${x}`);
//y참조는 안됨
// console.log(`y : ${y}`);


//오류설명
// 파일경로
// c:\sl_test\js_study\1.core-js\8.함수\8.scope.js:9(번째 라인)
// > console.log(`y : ${y}`); 오류난거 알려줌
// > ReferenceError: y is not defined

console.log(`=========================================`);

var z = 'global z'; //전역변수

function bar () {
    var z = 'local z'; //지역변수
    console.log(`함수 내부 : ${z}`);
}
console.log(`함수 외부 : ${z}`); //전역변수 참조 - 메모리에 지역변수 존재XX
bar();
console.log(`함수 호출 후 : ${z}`); //함수 호출 후 에도 전역변수 값 사용

