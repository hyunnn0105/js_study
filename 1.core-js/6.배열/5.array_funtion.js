
var foods = ['김말이', '닭꼬치', '어묵', '볶음밥', '짜장면', '짬뽕'];

//indexOf(element) : 배열 요소의 인덱스를 알려줌
// var idx = foods.indexOf('볶음밥');
//console.log(`찾은 인덱스: ${idx}`);
foods.lastIndexOf('김말이') // 뒤에서부터 탐색해서 먼저 발견되는 번호

/*
foods.indexOf 함수 없이 시도해보기
var idx = 0;
for (var f of foods){
    if (f==='닭꼬치'){
        break;
    }
    idx++;
}
console.log(`찾은 인덱스: ${idx}`);

*/

//sllice() : 배열을 부분추출하여 사본배열로 변환

console.log(`============================================`);

//2~5번 미만까지 추출 (2~4)
var copyFoods = foods.slice(2,5);
console.log(foods);
console.log(copyFoods);

//3번부터 끝까지추출
var copyFoods2 = foods.slice(3);
console.log(copyFoods2);

//배열전체복사
var copyFoods3 = foods.slice();
console.log(copyFoods3);

//사본 생성시 주의 - 이렇게하면 원본에도 영향이감 - 하나의 데이터를 공유해서 사용 XXX
/*
var numbers = [10, 20, 30];
var numbers2 = numbers;

console.log(`원본:[${numbers}]`);
console.log(`사본:[${numbers2}]`);
*/
console.log(`============================================`);

var nums = [10, 20, 30, 40, 50];

//reverse(): 베열을 역순으로 재배치, 원본이 변화함

var numsCopy = nums.slice();
numsCopy.reverse();

console.log(nums);
console.log(numsCopy);

// concat() : 배열 2개를 결합한 사본을 가져옴

var arr1 = [50,70,100];
var arr2 = [9, 5, 1, 10, 20];

var conCatCopy = arr1.concat(arr2);
console.log(conCatCopy);
console.log(arr1);
console.log(arr1);

(`===============================================`);

//includes(eleent) : 배열에 특정 요소가 있는지 여부확인

// var result = foods.includes('닭');
// console.log(`요소항목`)                     

// // var pets  = ['멍멍'], '야옹이, '짹짹이','고란이'

// // pets.splice[1,0,'징징이'];
// // 1번 인\ㄴ

// //2번부터 끝까지 삭제
// pets.splice(2);
// console.log(pets);

// includes(element) : 배열에 특정 요소가 있는지 여부 확인.

var result = foods.includes('닭');
console.log(`요소 탐색 여부: ${result}`);

var result2 = foods.includes('짜장면') ? '^^' : 'ㅜㅜ';

console.log(result2);

if (foods.includes('깐풍기')) {
    console.log('잘 먹겠습니다.');
} else {
    console.log('ㅠㅜㅠㅜㅠㅜㅜ');
}


// splice() : 배열의 특정 요소 제거
console.log('==============================');

var pets = ['멍멍이', '야옹이', '짹짹이', '고란이'];

console.log(pets);

pets.splice(1, 2);
console.log(pets);

// 0번인덱스로부터 1개를 삭제하고 그 자리에 어흥이 삽입
pets.splice(0, 1, '어흥이');
console.log(pets);

// 1번 인덱스에 징징이 삽입
pets.splice(1, 0, '징징이');
console.log(pets);

pets.push('꽥꽥이');
console.log(pets);

// 2번부터 끝까지 삭제
pets.splice(2);
console.log(pets);