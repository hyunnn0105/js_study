/*
ex - 사용자에게 반복해서 수를 입력받을 예정
100보다 큰수를 입력할 때까지 반복해서 입력을 받음
*/

while (true) {
    var num = +prompt(`숫자를 입력!`);
    if (num > 100) break;
}
alert(`반복문 종료`);

