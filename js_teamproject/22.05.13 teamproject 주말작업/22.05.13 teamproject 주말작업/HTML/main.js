
// 새로 생성된 태그 관리를 위한 id 부여 함수
function makeNewId () {
    //생성한 태그값 받기
    return makeDDay.length > 0 ? makeDDay[makeDDay.length-1].id + 1 : 1; 
}

/*
    얻어야하는값
    입력값 - 타이틀
    입력값 - 시작일
    입력값 - 종료일
    계산값 - 디데이 계산값

    *입력값은 다 따로 받음
    쇼쇼속 객체값 뽑아서 함수 넘기기
*/


// 입력한 디데이데이터 추출해서 리턴
function makeDDay() {
    const dateBox = document.querySelector('div.dateInputform');
    const [$dDayName, $startDate, $endDate] = [...dateBox.children];

    const DateObject = {
        id : makeNewId(),
        dayName: $dDayName.value,
        start: $startDate.value,
        end: $endDate.value,
    }
    //return DateObject;


    // console.log(DateObject);
    return DateObject;

};

// 디데이 계산 함수
function getDday(){

    const DateObject = makeDDay();

    //Day는 날짜 계산을 위해 날짜 시간값로 변환
    const startDate = Object.values(DateObject)[2];
    const startDay = Date.parse(startDate);

    const endDate = Object.values(DateObject)[3];
    const endDay = Date.parse(endDate);

    const calDate = endDay - startDay;
    const DdayDate = Math.abs(calDate / (1000 * 3600 * 24));
    return DdayDate;
};


//계산한 객체합쳐서 출력하기?
function addDday() {
    const dDayObj = makeDDay();
    dDayObj.dday = getDday();

    console.log('완성객체:', dDayObj);
    return dDayObj;
}

// 출력창에 랜더링 하기

const $dDayContainer = document.querySelector('.d-day-container');
const $addDday = addDday()
console.log(`id를 찾자: ${addDday}`);
// console.log($dDayContainer);

/*function showDday(){
    const $newdiv = document.createElement('div');
    $newdiv.dataset.id = ;
    $newdiv.classList.add('todo-list-item');


}*/

//value값 삭제하는 함수 - 수정하기
function deltext () {
    const getText = addDday();
    //Object.values(dDayObj);
    delete getText.dayName;
    delete getText.start;
    delete getText.end;
    delete getText.id;
    delete getText.dday;
}

const $addbtn = document.getElementById('addDate');
$addbtn.addEventListener('click', e => {
    e.preventDefault();

    addDday();
    deltext();


    //화면에 결과를 렌더링하는 함수 - 받기
    //renderDDayDate(dateObj);
    //renderNewToDo(dDayObj);


});

//============================



//==================================
/*

const remainTime = document.querySelector("#remain-time");
let dDay = document.querySelector(".d-day");
const $dDayContainer = document.querySelector('.d-day-container');

function diffDay() {
    const dDay2 = new Date("2022-12-31");
    const day2 = new Date();

    const diff = dDay2 - day2;
    // Math.floor()함수는 주어진 수의 같거나 작은 정수 중 큰 수를 반환
    // 간단하게 말하면 소수 부분을 버린다
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const dDay2year = dDay2.getFullYear();
    const dDay2month = dDay2.getMonth() + 1;
    const dDay2Date = dDay2.getDate();


    remainTime.textContent = `D-${diffDay}`;
    dDay.textContent = `endday : ${dDay2year}-${dDay2month}-${dDay2Date}`;
}

// 새로운 할 일을 화면에 랜더링하는 함수

function renderNewToDo() {
    const $newDiv = document.createElement('div');
    $newLi.dataset.id = newToDo.id;
    $newLi.classList.add('container');

    $newLi.innerHTML = `
        <h1 id="remain-time"></h1>
        <h2>D-Day</h2>
        <p class="d-day"></p>
        <div class="remove">
            <span class="lnr lnr-cross-circle"></span>
        </div>
    `;

    const $dDayContainer = document.querySelector('.d-day-Container');
    $dDayContainer.appendChild($newDiv)
}

// 삭제 처리
function removeDday($targetdiv) {
    //1. 화면처리 : 삭제버튼이 선택된 container태그를 d-day-container에서 제거
    $dDayContainer.removeChild($targetdiv)
    //2. 데이터 처리: 배열에서 제거된 container에 매칭하는 객체를 삭제


}

$dDayContainer.addEventListener('click', e => {
    if (e.target.matches('.remove span')) {
        //if (confirm('정말로 삭제할까요')) {
        removeDday(e.target.parentElement.parentElement);
        //}
    }
})

diffDay();
setInterval(diffDay, 1000);

);
*/