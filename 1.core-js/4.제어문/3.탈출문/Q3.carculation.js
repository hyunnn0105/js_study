alert(`
~~~~~~재미있는 사칙연산 게임~~~~~
[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]
==============================================
`);

var level = +prompt(`=========난이도를 설정합니다======== \n
[ 1. 상 (1~100) /  2. 중 (1~50) / 3.하 (1~20)]`)


if (level === 1) {
    alert('난이도 상을 선택했습니다.');
    var levNum = 100;
} else if (level === 2) {
    alert('난이도 중을 선택했습니다.');
    var levNum = 50;
} else if (level === 3) {
    alert('난이도 하를 선택했습니다.');
    var levNum = 20;
} else {
    alert('난이도를 잘못 선택했습니다. 난이도 상으로 자동시작합니다.');
    var levNum = 100;
}

var count = '';
var un = '';

var qNum = 1;
while (true) {   

    var ran1 = Math.floor(Math.random() * levNum) + 1;
    var ran2 = Math.floor(Math.random() * levNum) + 1;
    var num = ran1

    //랜덤부호결정
    if (num < 7) {
        var car = +prompt(`Q${qNum}. ${ran1} + ${ran2} = ???`);
        var plus = (ran1 + ran2);
    }
    else if ( num < 14) {
        var car = +prompt(`Q${qNum}. ${ran1} - ${ran2} = ???`);
        var mius = (ran1 - ran2);
        //continue~~
    }
    else{
        var car = +prompt(`Q${qNum}. ${ran1} X ${ran2} = ???`);
        var gob = (ran1 * ran2);
    }
    qNum++;
    
//종료 조건
    if (car === 0) {
        alert(`게임을 종료합니다.`);
        alert(`정답횟수 : ${count}회, 틀린횟수: ${un}회`);
        break;
    }
    else if (car === plus || car === mius || car === gob ){
        alert(`정답입니다.`);
    } 
    else {
        alert(`틀렸어요~`);
    }


    if (car === plus || car === mius || car === gob ) {
        count++;
    }
    else {
        un++;
    }

    
}