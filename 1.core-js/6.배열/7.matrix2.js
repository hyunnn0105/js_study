


// 우리반 학생 3명의 4과목 시험점수 (국영수탐)
var scoreList = [
    [88, 76, 92, 98],
    [65, 70, 58, 99],
    [100, 92, 100, 100]
];

// 각 학생의 평균들을 저장할 배열
var averageList = [];

// 각 개인의 평균점수와 학급평균을 구하고 싶다.
for (var stuScores of scoreList) {
    //개인의 총점을 저장할 변수
    var eachTotal = 0;
    for (var score of stuScores) {
        eachTotal += score;
    }
    //개인 평균
    var eachAvg = eachTotal / stuScores.length;
    averageList.push(eachAvg);
}

// 각 학생의 평균 출력, 학급평균 구하기

// 모든 학생의 평균 총합
var stuAvgSum = 0;
for (var i = 0; i < averageList.length; i++) {
    stuAvgSum += averageList[i];
    console.log(`${i+1}번 학생 평균: ${averageList[i]}점`);
}

//학급 평균
var classAverage = stuAvgSum / scoreList.length;
console.log('===========================');
console.log(`우리 학급 평균: ${classAverage}점`);












// // 학생 3명의 4과목 시험점수
// var

// var scoreList = [
//     [88, 76,92,98 ]
//     [65,70,58,99],
//     [100, 92, 100, 100]
// ];

// var average = []
// // 각 개인의 평균점수와 학급평균을 구하고 싶다

// for (var stuScores of scoreList){
//     var eachTotal = 0;
//     for (var score of stuScores){
//         eachTotal += score
//     }
//     var eachAvg = eachTotal / stuScores.length
//     averageList.push(eachAvg)
// }

// // 각 학생의 평균출력
// for(var = i; i < )
// var = stustuAvgSum = 0;
// for (var 1 = 0)

// //학급평균
// var classAvwerage = stustuAvgSum / scoreList.length;
