
//================ 전역변수, 함수 정의부 =====================
//게임진행에 필요한 데이터
// (실제정답,선택한숫자,최대,최소)
const gameData = {
    secret: Math.floor(Math.random()*100)+1 ,
    answer: null,
    min: 1,
    max: 100 
};

//숫자아이콘 생성함수
function makeIcons () {

    const $numbers = document.getElementById('numbers')
    // 가상의 태그를 추가하여 안정화
    const $virtual = document.createDocumentFragment();

    for (let i = 1; i <= 100; i++){
        const $newDiv = document.createElement('div');
        $newDiv.textContent = i;
        $newDiv.classList.add('icon');
    
        $virtual.appendChild($newDiv);
    }
    $numbers.appendChild($virtual)
}

//UP, DOWN일경우 해야할 일 정리
// ? paramiter 1 : isUP - up=ture / down=false - 자체가 T/F
// ? paramiter 2 : 
//Wow jjang sin ki hae
/*
function proccessUpDownCase(isUp){
    const CLASS_NAME = 'selested'
    const [$up, $down] = [...document.querySelector('result').children];
    if (isUp) {
        $down.classList.remove(CLASS_NAME);
        $up.classList.add(CLASS_NAME);
        //선택한거 생략 => +1
    } else {
        
        $up.classList.remove(CLASS_NAME);
        $down.classList.add(CLASS_NAME);
        //선택한거 생략 => -1
    }

    //아이콘제거함수 - up/down 구분이 필요함
    clearIcons(isUp);
}

//클릭한 아이콘을 기준으로 범위 밖의 아이콘을 제거하는 함수
function clearIcons(isUP) {
    //아이콘제거를 위해 부모 받기
}
//정답을 맞출경우 해야할일
function ProcessCorrectCase() {
    
}

//target 받아오기
function compareAnswer () {
    console.log(`정답 : ${gameData.secret}`);
    if (gameData.answer === gameData.secret) {
        //정답인경우
        console.log('정답');
    } else if (gameData.answer < gameData.secret){
        //Up
        proccessUpDownCase(true);
    } else {
        //down
        proccessUpDownCase(false);
    }
}
*/
//=============== 메인 코드 실행부분 =========================
// 즉시실행함수
(function () {

    //100개의 아이콘 배치
    makeIcons();

    //아이콘 클릭 이벤트 부여
    //1.100개 아이콘에 걸기 - 버블링이용
    const $numbers = document.getElementById('numbers');
    $numbers.addEventListener('click', e =>{
        
        //만약에 아이콘을 클릭하지 않았다면 나가
        // 확인작업 console.log(e.target);
        if (!e.target.matches('#numbers >.icon')) return;
        
        //사용자가 선택한 숫자
        // console.log(e.target.textContent);
        
        gameData.answer = +e.target.textContent
        console.log(gameData);

        //정답검증
        //up

        
            if (gameData.answer < gameData.secret) {
                //1.class 추가
                const $down = document.getElementById('down');
                const $up = document.getElementById('up');
                //1-2.class 삭제
                $down.classList.remove('selected');
                $up.classList.add('selected');

                // 2. icon 삭제
                //유!!!!!사!!!배!!!!!!!!열!!!!!!!!

                // console.log($numbers.children);
                // const $icon = $numbers.children;

                const $iconList = [...$numbers.children];
                console.log($iconList);

                console.log($iconList[gameData.answer]);
                $iconList.splice(1,3); // 사라지는데 줄어들지는 않음
                console.log($iconList);
                //배열배열

                //3.최솟값 수정
                const $begin = document.getElementById('begin');
                gameData.min = gameData.answer
                $begin.textContent = gameData.min
                //console.log($begin);
            }
            else if (gameData.answer > gameData.secret) {
                //1.class 추가
                const $down = document.getElementById('down');
                const $up = document.getElementById('up');
                $down.classList.add('selected');
                //1-2.class 삭제
                $up.classList.remove('selected');
                
                


                
                //3.최댓값 수정
                const $end = document.getElementById('end');
                gameData.max = gameData.answer
                $end.textContent = gameData.max
                console.log($end);

            } else {
                const $finish = document.getElementById('finish');
                $finish.classList.add('show');
                //클릭하면 새로고침??
            }


        
    } )
})();

