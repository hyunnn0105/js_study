// var targetNum = +prompt('양의 정수: ');
// var tnCopy = targetNum;

// var digit = 0;
// var w=targetNum;

// while (targetNum > 0) {
//     targetNum = parseInt(targetNum / 10);
//     digit++;
    
// }
//     // 1234567890
//     // //w=targetNum%1
// alert(`${targetNum}`);

// var targetNum = +prompt('양의 정수: ');
// var tnCopy = targetNum;
// var conut=''; // 자릿수를 기억할변수

//     while (targetNum > 0) {
//             targetNum = parseInt(targetNum/ 10); 
//             conut++;   
//         }


// alert(`${tnCopy}는 ${conut}자리 입니다.`);       

// var a 35 = +prompt(`양의 정수 : `) - 35;

// var targetNum35 = +prompt('양의 정수: ')35;
// var tnCopy35 = targetNum35;
// var conut=''; // 자릿수를 기억할변수

//     while (targetNum > 0) {
//             targetNum35 = parseInt(targetNum/ 10)//+tnCopy%10; 
            
// 	conut++;  3 

// 	1234567890*count(3)+(tnCopy%10(5)-12345


// ======================
// 	var m = 5;
// while (m >= 0) {
//     alert(`${m}!!`);
//     m--;
//         }

var targetNum = +prompt('양의 정수: ');

var result = '';
var n = 1;
while (n <= targetNum) {
    result += n % 10;
    n++;
}
alert(result);