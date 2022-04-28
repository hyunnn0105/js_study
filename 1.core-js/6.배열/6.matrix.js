
// 2차원 배열 - 배열의 요소가 또다시 배열인 경우
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var arr2d = [arr1, arr2, arr3,[10, 11, 12]];
console.log(arr2d);
console.log(arr2d.length);
console.log(`=====================================`);
console.log(arr2d[1]);
console.log(arr2d[3]); // 통채로 들어감

console.log(arr2d[0][2]); // inx 0 -> 3

console.log(arr2d[3][0]);

console.log(`=====================================`);

arr2d[2][1] = 88;
console.log(arr2d);

arr2d[1] = [100, 200, 300];
console.log(arr2d);

console.log(`===================================`);

arr2d.splice(0,1);
console.log(arr2d);

console.log(`===================================`);

arr2d[1].splice(1,1);
console.log(arr2d);

console.log(`===================================`);

arr2d.push(999);
console.log(arr2d);

console.log(`===================================`);

var result = arr2d[0] * arr2d[2]; //type - 배열
console.log(result);

var result2 = arr2d[0][1] * arr2d[2][0]; //type - 숫자
console.log(result2);


// arr2d[1][1].pop(); 숫자타입은 pop 사용불가
//아래는 다 배열
arr2d[1].pop();
arr2d.pop();
console.log(arr2d);


console.log(`===================================`);

var arr2d_2 = [
    ['a', 'b', 'c'],
    ['가', '나', '다'],
    ['D', 'E', 'F']
];

//2차원 배열을 분해하기 위해서 1차원 배열로 분리하고 이후 1차원 배열들도 분리한다.

for (var arr of arr2d_2){ //arr 1차열배열
    for (var s of arr){
        console.log(s);
    }
    // console.log();
}



// ---------------------- 3차원배열 ----------------------------
console.log(`=============================`);

var arr3d = [
    [
        [ 1,2,3,4],
        [5,6,7,8],
    ],
    [
        [9,10,11,12],
        [13, 14, 15,16],
    ],
    [
        [17,18,19,20],
        [21,22,23,24],
    ]
]
console.log(`arr3d의 길이: ${arr3d.length}`);
console.log(arr3d[0]);
console.log(arr3d[1][1]);
console.log(arr3d[0]);
console.log();