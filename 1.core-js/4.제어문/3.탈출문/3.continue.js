
// for (var i = 1; i <= 10; i++){
//     if (i === 5) continue; //skip
//     console.log(i);
// }

// console.log(`=======================================`);

// for (var i = 1; i <= 10; i++){
//     if (i % 2 === 5) continue; //짝수이면 skip해라 -> 홀수 출력
//     console.log(i);
// }


//continue 아래의 코드는 실행 안됨 -> 다시 처음으로 돌아감
//break 아래 코드 무시

while (true) {
    var n = +prompt(`숫자를 입력!`);
    if(n === 0){
        break;
    }
    else if (n === 1){
        continue;
    }
    alert(`메롱`)
}
alert(`end`);
