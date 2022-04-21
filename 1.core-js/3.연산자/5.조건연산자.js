
//조건연산자
// 논리형조건식(t or f 파악가능) ? 참일경우실행할코드 : 거짓일경우;

var myFrined = '쿵쿵이';
myFrined === '짹짹이' ? console.log('짹짹 하이') :console.log('누구세요?');

// 시험점수
var score = 78;

var result = score >= 60 ?'합격' :'불합격';
console.log(`시험결과: ${result}`);
//3항 연산자 우선 실행 후 = 실행됨

//+비트오퍼레이터는 패스함?