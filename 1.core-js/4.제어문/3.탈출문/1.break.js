
for ( var i = 0; i < 10; i++) {
    if (i === 5){
        break;
    }
    console.log(i);
} //end for -- true일경우 if 바로 탈출 
// - 5일때 먼저 브레이크 -> (5) 실행XX
console.log('반복문 끝!');

console.log(`==========================================`);

for (var i=0; i<3; i++){
    for (var j = 0; j < 2; j++){
        if ( i === j ) {
            break;
        }
        console.log(`${i}, ${j}`);
    } //inner
} //outer

console.log(`===================================`);

var m = 0;
while (++m < 10){
    console.log(m);
    if ( m % 3 === 0) break;
}
console.log('반복문 종료 후 m : ${m}');