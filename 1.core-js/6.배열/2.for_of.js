var total = 0;
var scoreList = [97, 88, 100, 92, 55, 23]; //scoreList.length 설정시 변하는거 담아줌


//총점구하기
//n개 인데스의 범위 - 0 ~ n-1번
for (var n of scoreList) {
    total += n;
}

/*
for (var i = 0; i < scoreList.length; i++){
    total += scoreList[i];
}
*/

//평균구하기
var average = total / scoreList.length;

// 평균반올림하기
var digit = 2;
var prettierAvg = Math.round(average*10 ** digit) / 10 ** digit;

console.log(`총점 : ${total}점, 평균: ${prettierAvg}점`);

