
//매개변수 (parameter)
// - 함수를 정의할 때 함수 호출부에서 전달한 값을 받아서 저장하는 변수

// 내 이름을 불러주기 전까지 나는 하나의 ?에 불과했다
function add (n1,n2) {
    console.log('함수실행');
    return n1+n2; //나비처럼 날아서 벌처럼 쏴랑
}

//함수 호출
console.log(add(10,20)); //lg(30); 

var number = add(20,50); //var number = 70;
console.log(number);

// x ~ y까지의 총합을 구해야함
// ex - 1 ~ 10까지의 총합 : 55, 3 ~ 5까지 : 12

function clacRangeTotal (begin, end) {   
    var total = 0;
    for (var n = begin; n <= end; n++) {
        total += n;
    }
    //밖에서 숫자를 넣어줘야함
    return total;
}

// 인수(Argument):함수를 호출할 때 함수에게 전달하는 값

//1~10까지 총합
var r1 = clacRangeTotal(1,10);
console.log(r1);

console.log(`result2: ${clacRangeTotal(3,7)}`);

var r2 = clacRangeTotal();
console.log(`r2 : ${r2}`);

//매개변수가 없는 함수 in (X) out (X) ->return (X) 매개변수에 인해 내부의 실행내역을 바꿀 수 없음
function rdd() {
    console.log(`링딩동동동`);
}

for (var i =0; i < 5; i++) {
    rdd();
}

// ES6
// function sayHello(language='한국어') - 언어 기본값이 한국어로설정됨

//매개변수의 기본값
function sayHello(language='한국어') {
    
    //ESS
    language = language || '한국어'
    
    if (language === '한국어') {
        console.log('안녕하세요');
    } else if (language === '영어') {
        console.log('하이');
    } else if (language === '중국어') {
        console.log('니하오');
    } else {
        console.log('몰라~');
    }
}


console.log(`========================================================`);
sayHello('한국어')
sayHello('영어')
sayHello('중국어')

//매개변수가 없는 함수
function selectRandomPet() {
    var pets = ['멍멍이', '야옹이', '짹짹이', '어흥이', '두껍이'];
    // 0 ~ 4까지의 랜덤정수
    var rn = Math.floor(Math.random() * pets.length);
    return pets[rn];

}

console.log(`선택된 동물 : ${selectRandomPet()}`);