// 구구단 5단 출력
var level = 7;
for (var n = 1; n <= 9; n++ ) {
    console.log(`${level} x ${n} = ${level*n}`);

}
console.log('==========================');

// 1 ~ 20사이의 정수 중 홀수만 출력
/*
for (var m = 1; m <= 20; m++) {
    console.log(m);
    m += 2;
}
console.log('==========================');
*/

// 1~20사이 정수 중 짝수만 출력
for (var m = 1; m <= 20; m++){
    if (m % 2 === 0) {
        console.log(m);
    }
}
console.log('==========================');

// 18 ~ 32 사이의 3의 배수만 출력

for (var k = 18; k <= 32; k++) {
    if (k % 3 === 0) {
        console.log(k);
    }
}
console.log('========================');

// 1 ~ 4000 사이에 있는 정수 중 12의 배수의 개수

var count = 0;
for (var z = 1; z <= 4000; z++ ) {
    if (z % 12 === 0) {
        count++;
    }
}
console.log(`총 개수: ${count}개`);