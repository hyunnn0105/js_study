
var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
    var modTarget = prompt(`현재 멤버: [${tvxq}]\n삭제할 이름을 입력하세요.`);

    if (tvxq.includes(modTarget)) {

        var newName = prompt(`새로운 맴버 이름을 입력하세요.`)
        var idx = tvxq.indexOf(modTarget);
        tvxq[idx].newName;
        alert(`수정 완료!\n남은 멤버: [${tvxq}]`);
        break;
    } else {
        alert(`${modTarget}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
    }
}

/*
-한번 사용하는 변수들 정리해서 이렇게도 가능

     tvxq[tvxq.indexOf(modTarget)] = prompt('새로운 멤버 이름을 입력하세요.'); //수정 코드
        alert(`수정 완료!\n남은 멤버: [${tvxq}]`);

*/
