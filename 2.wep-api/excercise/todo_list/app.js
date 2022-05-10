/*
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

/*
//함수
function addTodoList () {
    

}
*/

//=========================================================================

const $todoText = document.getElementById('todo-text');

const $content = document.querySelector('.content');
const $todoList = document.querySelector('.todo-list');

/*
    <li data-id="3" class="todo-list-item">
    <label class="checkbox">
        <input type="checkbox">
        <span class="text">할 일 3</span>
    </label>
    <div class="modify"><span class="lnr lnr-undo"></span></div>
    <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
    </li>
*/
