// ??????????????????????? - 찾아보기


//or연산
console.log('hello' || 'world'); 
// 논리연산자 met 논리X -> t/f 판단함
console.log( 0 || '안녕');

console.log(`=================================`);

console.log('HEllo' && 'WOrld'); //true로 판단
console.log( null && '잘가'); //false찾기


console.log(`================================`);

var x = 10;

x > 0 && console.log(`안녕~~~~~~`);
// true -------> 우항선택 ->console log 실행

// if ( x > 0){
//     console.log(`안녕~~~~~~`);
// }