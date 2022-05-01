/*
    Q4)
    n개의 정수와 탐색할 정수를 전달받아 
    탐색할 정수가 n개 중에 있다면 
    몇번째에 있는지 반환하고
    없다면 -1을 반환하는 함수 search()를
    작성하고 아래 그림과 같이 출력하세요.
*/


function findNumberCount(arr, targetNum) {
    var idxArr = []; //인덱스위치들을 저장할 배열
    for (var i=0; i< arr.length; i++) {
        if (arr[i] === targetNum) {
            idxArr.push(i);
        }
    }
    return idxArr;
}

// 배열의 개수를 알려주는 함수
function count(arr) {
    return arr.length;
}

var numbers = [9, 9, 10, 33, 9, 44, 9, 44, 11, 9];

var idxArray = findNumberCount(numbers, 9);
console.log(idxArray);
console.log(`타겟의 개수: ${count(idxArray)}`);



// function search (arr, find) {
//     var findNum = vx.includes(find);
//     var iNum = vx.indexOf(findNum);
//     var i = iNum + 1
//     if (findNum === vx) {
//         return;
//     }
//     else {
//         return - 1;
//     }
// } 



// var vx = [83, 49, 77, 49, 25];
// var find = 49;
// var i = 0;
// console.log(`${find}는 ${i}번째에 있습니다.`);


// function search(arr, targetNum) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === targetNum) {
//             return i;
//         }
//     }
//     return -1;
// }

// function search2(arr, targetNum) {
//     return arr.indexOf(targetNum);
// }

// //==========================

// var numbers = [99, 33, 44, 100, 3, 67];

// var result = search(numbers, 3);
// console.log(`result: ${result}`);