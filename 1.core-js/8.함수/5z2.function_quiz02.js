
function min (numbers) {
    var minNum = numbers[0];
    for (var n of numbers) {
        if (n<minNum){
            minNum = n;
        }
    }
    return minNum;
}

var nums =[];

while (true) {
    var inputMS = prompt('숫자를 입력 : ');
    if (inputMS === '그만') break;
    nums.push(+inputMS);
}

var result = min(nums);
console.log(`${result}`);








/*

function min (numberList) {
    if (n<) {
        return n
    } else {

    }
}

var numberList = [];
// var min = 0;
// for (numberList of min){
//     numberList 
// }

function imput () {
    while (true) {
        var numberList = prompt(`정수를 입력하세요`);
        numberList.push(+numberList);
        if (numberList === '그만'){
            return;
        }
    }
    
}

*/

// while (true) {
//     var i = prompt('숫자를 입력하세요.\n그만 두려면 \'그만\'이라고 입력하세요.');
//     if (i === '그만') break;

//     numbers.push(+i);
// }

//min 호출
//출력
//prompt 그만 -> 글자로 받기  return 
