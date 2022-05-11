/*
========= 배열이나 li 주고받는거 함 확인해보기
1.할일 추가하기 '+' button/ enter ??? 근데 저 속성을 다 더해주는거야? 오반데
    1.할일을 더하기 위해서는 <ul class="todo-list"> 안에 있는 
    <li data-id="1" class="todo-list-item"> 이런 li를 만들어야함

    2.이걸 만들기 위해서는 li값을 만들어서 <ul class="todo-list"> 여기 안에 넣어줘야함
    3.하지만 다른 li들은 삭제와 수정등을 위해 가진 요소가 짱많음
    4.이걸 어케 더해줘야하는가???
    4-1.따로 추가할때 
        li -1 
        label -1 / input -1 / span -1
        span -1 / div -1
        div -1 / span - 1 = 클래스명도 따로있음!!
    
    4-2.같이 추가할때> 배운적이 있나??

    5.이걸 입력해서 '+'나 'enter' 사용해서 event
    6.이 값이 맨 마지막에 추가!!



2.할일 삭제하기 - x
    == 할일을 삭제과정 ==
    1. x버튼을 누른다
    -객체 프로퍼티 / 노드 삭제
    2. 사라진다

3. 할일 수정하기 - return
    == 할일을 수정과정 ==
    1. return버튼을 누른다
    2.text창이 그 자리에서 만들어짐?
    3.수정할거 입력
    4.저장-알아서

4. 할일 체크 시 회색+가로 줄 긋기
5. 일정부분 넘어가면 스크롤 만들기
// overflow:nomal? 이런거였음
*/

// 구해야 하는 값?
// const todoList = {
//     todo : null,
    
// };

//===========================================================================
// 새로운 할 일의 아이디를 생성하는 함수
function makeNewId () {
    // if (todos.length <= 0) {
    //     return 1;
    // } else {
    //     //기존의 맨 마지막 데이터의 아이디 + 1
    //     return todos[todos.length-1].id + 1; 
    // }
    //리팩토링~
    return todos.length > 0 ? todos[todos.length-1].id + 1 : 1; 

}


//할 일 추가 기능의 정의
//이걸 배열에 넣고 태그?
//배열에서 탐색
const todos  = [
    {
        id : 1,
        text : '할 일 1',
        done: false
    },
    {
        id : 2,
        text : '할 일 2',
        done: false
        },
    {
        id : 3,
        text : '할 일 3',
        done: false
        }         
];

//새로운 할일을 화면에 랜더링하는 함수 - 객체를 줌
function renderNewToDo(newToDo) {
    //innerhtml로 만들기
    //li태그 생성
    const $newLi = document.createElement('li');
    $newLi.dataset.id = newToDo.id;
    $newLi.classList.add('todo-list-item');

    //복잡해서 문자열로 넣어줌 ??이게 가능해?
    $newLi.innerHTML = `
        <label class="checkbox">
            <input type="checkbox">
            <span class="text">${newToDo.text}</span>
        </label>
        <div class="modify">
            <span class="lnr lnr-undo"></span>
        </div>
        <div class="remove">
            <span class="lnr lnr-cross-circle"></span>
        </div>
    `;
    const $todoList = document.querySelector('.todo-list');
    $todoList.appendChild($newLi);
}

function insertToDo() {
    //1. 할일 데이터 객체 생성
    const $todoText = document.getElementById('todo-text');
    const newToDo = {
        // 마지막아이디+1, 순서대로 만들기 굳
        id: makeNewId(), 
        text: $todoText.value ,
        done:false,
    };
    //console.log(newToDo);

    //2.생성한객체를 '배열'에 추가 -> 노드-appendchild/class-classList
    todos.push(newToDo);
    console.log(todos);

    //3.화면에 렌더링
    renderNewToDo(newToDo);

    // 4. input창 비우기
    $todoText.value = '';
}

// data-id가 주어지면 해당 id와 일치하는 객체의 인덱스를 리턴
function findIndexById(dataId) {
    
    for (let i = 0; i < todos.length; i++) {
        // console.log(`todos[i].id: ${typeof todos[i].id}`);
        // console.log(`dataId: ${typeof dataId}`);
        // console.log('=======================');
        if (+dataId === todos[i].id) {
            return i;
        }
    }
    return null; // 못찾았다
}



//할일 체크시 변화 처리
//클릭한체크박스 호출받기
function changeCheckState($checkbox) {
    /*
        #  렌더링 css 처리
        1. 지금 내가 체크한 체크박스를 포함하고 있는 label태그를 찾아서
          클래스 checked를 부여해야합니다.
        2. 그러면 이 함수는 지금 클릭한 체크박스가 누구인지 알아야 합니다.
          그러면 label을 찾아낼 수 있습니다.
        3. 그런데 이 함수는 어디가 클릭되었는지 모릅니다. ?? 그럼 누가 알까요?
    */

    // 1. label 찾기
    //const $checkbox = document.querySelector('.checkbox'); - 잉거아님
    
    
    // 2. checked 부여하기
    //$checkbox.classList.add('checked');
    const $label = $checkbox.parentElement;
    $label.classList.toggle('checked');
    
    // 3. target?
    // $checkbox.addEventListener('click', e => {
    //     console.log(e.target); 
        
    //     if (e.target){
    //         $checkbox.classList.add('checked');
    //         $checkbox.firstElementChild.classList.add('checked');
    //         console.log($checkbox.firstElementChild);
    //         $checkbox.firstElementChild.classList.remove('checked');
    //         console.log($checkbox.firstElementChild);
    //     } else {
    //         //이미 class를 가지고 있을때 check 풀기
    //         console.log('b');
    //     }
    // });

    /*
        # 데이터 변동 처리
        1. 지금 css만 변했지 실제 데이터는 변하지 않았음.
        2. todos배열에 있는 변동된 객체를 찾아서 done프로퍼티의 값을
           반대로 바꿔주는 처리가 필요함.
        3. 지금 체크한 태그의 정보를 확인해서 실제 배열에서 해당 객체를
          찾아낸 후 done을 수정해야 함. - 논리값 바꾸기
        4. 그러면 어떻게 지금 클릭한 체크박스정보를 가진 객체를 탐색할 수 있을까?
        5. id정보를 알면 가능하다.
    */
   //id를 for문 돌려서 탐색?
   //지금 클릭한 대상의 id값이 무엇인가?
   const dataId = $label.parentElement.dataset.id;
   //console.log(dataId);
   const idx = findIndexById(dataId);
   todos[idx].done = !todos[idx].done;
   console.log(todos[idx]);
}

function removeToDO($targetLi){
    // 1.화면처리 : 삭제버튼이 선택된 li태그를 ul에서 제거
    const $todoList = document.querySelector('.todo-list');
    $todoList.removeChild($targetLi);
    
    // 2. 데이터 처리 : 배열에서 제거된 li에 매칭되는 객체삭제
    console.log(todos);

    const delIndex = findIndexById($targetLi.dataset.id);
    todos.splice(delIndex, 1);
}

function enterModifyMode($modSpan) {
    //아이콘변경 바보 하... class가 두개구나, 그렇구나,,,  **특정타겟잡기**
    // const $modSpan = document.querySelector('.lnr-undo');
    $modSpan.classList.replace('lnr-undo','lnr-checkmark-circle');
    console.log($modSpan);
    
    //text 부분 span -> input[type=text]로 변경
    //input의 class="modify-input"
    const $textSpan = $modSpan.parentElement.previousElementSibling.lastElementChild;



    //input 만들기
    const $modInput = document.createElement('input');
    $modInput.setAttribute('type', 'text');
    $modInput.setAttribute('value', $textSpan.textContent);
    $modInput.classList.add('modify-input');

    //node change
    $textSpan.parentElement.replaceChild($modInput, $textSpan);

}

//수정완료처리
function ModifyTodo($modSpan) {
    //아이콘 변경
    $modSpan.classList.replace('lnr-checkmark-circle', 'lnr-undo');

    //교체대상 input
    const $modInput = $modSpan.parentElement.previousElementSibling.lastElementChild;

    //span.text 생성
    const $textSpan = document.createElement('span');
    $textSpan.classList.add('text');
    $textSpan.textContent = $modInput.value;

    //노드교체
    const $label = $modInput.parentElement;
    $modInput.parentElement.removeChild($textSpan, $modInput);

    //데이터 변동 처리
    const idx = findIndexById($label.parentElement.dataset.id);
    todos[idx].text = $textSpan.textContent;
    console.log(todos);
}

//할일 추가시 input검증
// function isValidate(){

//     const $todoText = document.getElementById('todo-text');

//     //trim - 공백제거 함수
//     if ($todoText.value.trim() === '') {
//         $todoText.style.background = 'orangered';
//         $todoText.setAttribute('placeholder', '필수 입력사항입니다.');
//         $todoText.value = '';
//         return false;
//         // 바보 문자열도 배열이다...ㅋ
//     } else if ($todoText.value.length > 10){
//         $todoText.style.background = 'orangered';
//         $todoText.setAttribute('placeholder', '10글자 이내로 작성하세요.');
//         $todoText.value = '';
//         console.log($todoText.value);
//         return false;
//     } else {
//         $todoText.style.background = '';
//         $todoText.setAttribute('placeholder', '할 일을 입력하세요.');
//         return true;
//     }
// }

// 할 일 추가시 input 검증
function isValidate() {

    const $todoText = document.getElementById('todo-text');

    // trim(): 문자열의 앞뒤 공백 제거
    if ($todoText.value.trim() === '') {
        $todoText.style.background = 'orangered';
        $todoText.setAttribute('placeholder', '필수 입력사항입니다!');
        $todoText.value = '';
        return false;
    } else if ($todoText.value.length > 10) {
        $todoText.style.background = 'orangered';
        $todoText.setAttribute('placeholder', '10글자 이내로 작성하세요!');
        $todoText.value = '';
        return false;
    } else {
        $todoText.style.background = '';
        $todoText.setAttribute('placeholder', '할 일을 입력하세요.');
        return true;
    }
}





//============ 메인 실행부 =============================================================




(function(){
    //event처리
    
    // 할 일 추가 클릭이벤트
    const $addbtn = document.getElementById('add');
    $addbtn.addEventListener('click', e => {
        e.preventDefault(); //form 제출기능(새로고침해서 전송) 막아버림!

        if(isValidate()) {
            insertToDo();
        }
        
    });

    // 할 일 완료 체크이벤트 (change 이벤트 - 값변경이벤트)
    const $todoList = document.querySelector('.todo-list');
    $todoList.addEventListener('change', e => {
        
        //checkbox이벤트 아니면 나가라!
        if(!e.target.matches('.checkbox input[type=checkbox')) return;
        
        changeCheckState(e.target);
    });

    // 할 일 삭제 버튼 클릭 이벤트 - span을 가진 ul
    $todoList.addEventListener('click', e => {
        //이렇게 하니 할일 삭제의 범위가 너무 넓음 - 정확하게 부모까지 언급해서 사용
        //match
        // console.log(e.target);
        if(e.target.matches('.remove span')) {
            console.log('할 일 삭제');
            console.log(e.target);

            if(confirm('정말로 삭제할까요?')){
                removeToDO(e.target.parentElement.parentElement);
            }


        } else if(e.target.matches('.modify .lnr-undo')) {
            
            // 할 일 수정모드 진입 클릭 이벤트
            console.log('수정모드 진입');
            enterModifyMode(e.target);
        } else if (e.target.matches('.modfity .lnr-checkmark-circle')){
            // 할 일 수정완료 클릭 이벤트
            //console.log('수정완료');

            //함수가 할 일 - 랜더링+실제수정완료 - lg 찍어보기??
            ModifyTodo(e.target);
        }

    });
    

    //1.노드교체


    // 할 일 수정 완료 클릭 이벤트
}) ();

// const $todoText = document.getElementById('todo-text');

// const $content = document.querySelector('.content');
// const $todoList = document.querySelector('.todo-list');

