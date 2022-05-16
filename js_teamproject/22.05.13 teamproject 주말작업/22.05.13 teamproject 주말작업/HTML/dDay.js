/*
    얻어야하는값
    입력값 - 타이틀
    입력값 - 시작일
    입력값 - 종료일
    계산값 - 디데이 계산값

    *입력값은 다 따로 받음
    쇼쇼속 객체값 뽑아서 함수 넘기기
*/

//id 받을 배열
const ddayArray = [];


function makeNewId () {
    //생성한 태그값 받기
    return ddayArray.length > 0 ? ddayArray[ddayArray.length-1].id + 1 : 1; 
}
console.log(ddayArray.length);

// 입력한 디데이데이터 추출해서 리턴
function makeDDay() {
    const dateBox = document.querySelector('div.dateInputdiv');
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

    // console.log(dDayobj.dday);

    // console.log('완성객체:', dDayObj);
    //객체 배열 추가 (선생님)
    ddayArray.push(dDayObj);
    // console.log('zz',dDayObj.dday);
    return dDayObj;
}

function deltext () {
    const getText = addDday();
    //Object.values(dDayObj);
    const dDayTitle = document.getElementById('dDayTitle');
    const startDay = document.getElementById('startDay');
    const endDay  = document.getElementById('endDay');
    dDayTitle.value = '';
    startDay.value = '';
    endDay.value = '';

};

//==================================

const $addbtn = document.getElementById('addDate');
$addbtn.addEventListener('click', e => {
    e.preventDefault();

    const dateObj = addDday();
    renderNewToDo(dateObj);
    
    deltext();
});

    //화면에 결과를 렌더링하는 함수 - 받기
    //renderDDayDate(dateObj);
    //renderNewToDo(dDayObj);




//==========================================================================

const remainTime = document.querySelector("#remain-time");
let dDay = document.querySelector(".d-day");
const $dDayContainer = document.querySelector('.d-day-container');


// 새로운 할 일을 화면에 랜더링하는 함수

function renderNewToDo(dateObj) {
    const $newDiv = document.createElement('div');
    $newDiv.dataset.id = dateObj.id;
    $newDiv.classList.add('container');

    $newDiv.innerHTML = `
        <h1 id="remain-time">D-${dateObj.dday}</h1>
        <h2 id="dday-title">${dateObj.dayName}</h2>
        <p class="d-day">${dateObj.end}</p>
        <div class="remove">
            <span class="lnr lnr-cross-circle"></span>
        </div>
    `;

    const $dDayContainer = document.querySelector('.d-day-container');
    $dDayContainer.appendChild($newDiv)
}

// 삭제 처리
function removeDday($targetdiv) {
    //1. 화면처리 : 삭제버튼이 선택된 container태그를 d-day-container에서 제거
    $dDayContainer.removeChild($targetdiv)
    //2. 데이터 처리: 배열에서 제거된 container에 매칭하는 객체를 삭제
    const delIndex = findIndexById($targetdiv.dataset.id);
    Object.splice(delIndex,1);
    console.log(object);


}

/*
    function deltext () {
        const getText = addDday();
        //Object.values(dDayObj);
        const dDayTitle = document.getElementById('dDayTitle');
        const startDay = document.getElementById('startDay');
        const endDay  = document.getElementById('endDay');
        dDayTitle.value = '';
        startDay.value = '';
        endDay.value = '';
    }*/

$dDayContainer.addEventListener('click', e => {
    if (e.target.matches('.remove span')) {
        if (confirm('정말로 삭제할까요')) {
        removeDday(e.target.parentElement.parentElement);
        }
    }
})