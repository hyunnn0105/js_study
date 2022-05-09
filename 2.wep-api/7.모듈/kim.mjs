//kim의 파일

const x = '김철수'; //전역변수

function hello () {
    console.log('안녕~~ 나는 철수');
}

//전역변수,함수를 외부로 내보내기 - 코드 공개
export{x,hello};