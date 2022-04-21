
// && : and 연산
//양쪽 항 모두 참이면 전체 연산결과가 참이다.

var t = true, f= false;

//ex) think 로그인
console.log(t && t); //t
console.log(t && f);
console.log(f && t);
console.log(f && f);

 //================================================

/*
    || : or 연산
    양쪽 항 중에 한쪽만 참이여도 전체결과가 참
*/
console.log(t||t);
console.log(t||f);
console.log(f||t);
console.log(f||f); // f


//==============================================================
/*
    ! : NOT 연산 (논리반전)
*/
console.log(!f);

var money = 0;
if (!money) {
    console.log('돈이 없어요');
} else {
        console.log('돈이 ${money}원 있어요.');
}