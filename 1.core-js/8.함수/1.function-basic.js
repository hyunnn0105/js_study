
// var userName;
// userName = '김철수';

// console.log(`${userName}님 안녕하세요`);
// console.log(`${userName}님 오늘도 즐거운 하루되세요`);

// //~~~~~~~~코드~~~~~~~~~~~~~~~~~~~

// userName = '박영희';
// console.log(`${userName}님 안녕하세요`);
// console.log(`${userName}님 오늘도 즐거운 하루되세요`);

// //관리하기 힘들어서 -> 함수

//함수 정의 (함수를 만든다)
function callUserName (userName) {
    if (typeof userName === 'number'){
        console.log(`숫자로 된 이름은 사용할 수 없습니다.`);
        return; //함수의 탈출문
    }
    console.log(`${userName}님 hi~~`);
    console.log(`${userName}님 오늘도 즐거운 하루되세요`);
    console.log(`=========================================`);
}
//함수명 - 동사feeling / block느낌이라 ; 사용XX

// 함수 호출 (함수를 사용한다)
callUserName('박찬호');
callUserName('김영희');
//~~~~~~~~~~~~
callUserName('둘리');
callUserName(100);