
// var distributions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// for (var i = 0;)
// distributions[parseInt(scoreList[i]/10)]++;


// var studentNum = 

var distributions = [0,0,0,0,0,0,0,0,0,0,0];
var scoreList = [];

while (true){
    var student = +prompt(`학생 수 1~80명 사이로 입력하세요.`);
    if(student >= 1 && student <= 80){
        break;
    }
    else {
        alert(`학생수를 다시 입력하세요.`);
    }
}

var infor = alert(`${student}명의 학생수의 점수를 1 ~ 100까지 입력하세요. `);

var k = 1;

while( k <= student ){
    // var scoreList = +prompt(`${studentList}명의 학생수의 점수를 1 ~ 100까지 입력하세요. `);
    var score = +prompt(`${k}번 : `);
    if ( score <= 100 ){
        scoreList.push(score)
        k++;
    }
    else {
        alert(`0에서 100점 사이로 입력하세요!`);
    }
}

// while (scoreList.length >= 0 ){
//     var star = '*'
//     if (scoreList%10 === 0){
//         star++;
//         alert(`0~9 : ${star}`);
//     }
//     else {
//         alert(`home`);
//     }
// }
    
for (var i = 0; i < scoreList.length; i++) {
    distributions[parseInt(scoreList[i]/10)]++;
}
//[0,0,2,1,0,1,0,1,1,2,2]
// console.log(distributions);

var star = '';
for (var i=0; i< distributions.length; i++) {
    
    if (i < distributions.length - 1) { 
        star += `${i*10} ~ ${i*10+9} : `;
    } else {
        star += `100 : `;
    }
    for (var j=0; j < distributions[i]; j++) {
        star += '*';
    }
    star += '\n';
}
alert("*");


/*

=============================================================================


//학생 수 입력 받기
var stuNum;
while (true) {
    stuNum = +prompt(`학생 수를 입력해주세요.`);
    if (stuNum >= 1 && stuNum <= 80) {
        break;
    }
    alert('1~80 사이의 숫자를 입력하세요.');
}

alert(`${stuNum}명의 점수를 입력해주세요`);

//학생 점수 배열
var scoreList = [];
//분포 배열
var distributions = [0,0,0,0,0,0,0,0,0,0,0];

var num = 1; //학생번호

//학생들 점수 입력받기
while (scoreList.length < stuNum) {
    var score = +prompt(`${num}번: `);

    //입력점수 검증
    if (score < 0 || score > 100) {
        alert('0 ~ 100점 사이로 입력하세요!');
        continue;
    }
    scoreList.push(score);
    num++;
}



//분포 배열 완성하기 [0,0,2,1,0,1,0,1,1,2,2]
// scoreList[0] : 23 -> distributions[2]++ -> distributions[23/10]++
// scoreList[1] : 55 -> distributions[5]++ -> distributions[55/10]++
// scoreList[2] : 100 -> distributions[10]++ -> distributions[100/10]++
// scoreList[3] : 100 -> distributions[10]++

for (var i = 0; i < scoreList.length; i++) {
    distributions[parseInt(scoreList[i]/10)]++;
}
//[0,0,2,1,0,1,0,1,1,2,2]
// console.log(distributions);

var star = '';
for (var i=0; i< distributions.length; i++) {
    
    if (i < distributions.length - 1) { 
        star += `${i*10} ~ ${i*10+9} : `;
    } else {
        star += `100 : `;
    }
    for (var j=0; j < distributions[i]; j++) {
        star += '*';
    }
    star += '\n';
}
alert("*");
*/
