
var name_ = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']

// 다 false로 나와서 이거 수정하기

while (true) {

    var input = prompt(`${name_} \n 삭제할 이름을 입력하세요.`);
    // var inx = name_.indexOf(`${input}`);

    if (input.includes(name_)){
        var del = name_.splice(name_.indexOf(input), 1);
        alert(`수정완료! \n 남은멤버 : ${name_}`);
    }
    else{
        alert(`${input}은(는) 잘못된 이름입니다. \n 다시 입력해주세요. `)
    }

    if (name_.length <= 0){
        alert(`모든멤버가 삭제되었습니다.`)
        break;
    }
}