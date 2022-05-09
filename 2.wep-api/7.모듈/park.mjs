//박의 파일

const x = '박영희'; //전역

function hello () {
    console.log('잘가 영희');
}

//전역변수,함수를 외부로 내보내기 - 코드공개
export{x,hello};