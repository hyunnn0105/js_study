

// 객체생성 : 객체 리터럴
var dog = {
    name: '뽀삐',
    kind: '진돗개',
    age: 3,
    injection: true,
    favorite: ['산책', '개껌'] 
};

var cat = {
    kind: '블랙러시안',
    injection: false,
    name: '콩순이',
    age: 2,
    favorite: ['낮잠', '츄르', '캣타워']
};

console.log(typeof dog);

//객체에 저장된 값 참조
console.log(dog.name);
console.log(cat.name);
console.log(cat.age);

console.log(dog.favorite);
console.log(cat.favorite[0]);

dog.favorite.push('꼬리흔들기');
console.log(dog);

// cat.splice(1, 1);
cat.favorite.splice(0, 1);

// 프로퍼티 참조 2
console.log('===================');

console.log(dog.injection);
console.log(dog['injection']);

console.log('======================');

var x = 'age';
console.log(cat[x]);
// console.log(cat.x);  (X)

var arr = [1,3,5,7];
var n = 2;
console.log(arr[n]);

// 프로퍼티 값 수정
console.log('=======================');

dog.age = 5;
dog.favorite[1] = '아이들';

console.log(dog);

// 새로운 프로퍼티 동적 추가(실행중 추가)
cat.master = '김철수';
console.log(cat);


// 프로퍼티 동적 제거
delete cat.master;
console.log(cat);

//빈 객체만들기
var obj = {};




// // 객체생성 : 리터럴
// var dog ={
//     name: '뽀삐',
//     kind: '진돗개',
//     age = 3,
//     injection : false,
//     favorite : '[김식, 안주]'
// }

// var cat ={
//     name: '콩순이',
//     kind: '블랙러시안',
//     age = 2,
//     injection : false,
//     favorite : '[류프, 나나]'
// }

// console.log(typeofcat);
// console.log(cat.age);


// //--스트링 주로 사용
// dog.favorite.push('꼬리흔들기')


// //cat splice(0,1);
// console.log(injection);
// console.log([`injection`]);

// console.log(`===================`);

// var x = 'age';
// console.log(cat[x]);

// // XXXX console.log(cat.x);

// //프로퍼티 값수정
// console.log(`=================================`);

// dog.age = 5;
// console.log(dog);

// dog.favorite[1] = '아이들';

// console.log(dog);

// // 새로운 프로퍼티 동적 (실행중)추가

// cat.master = '김철수'
// console.log(cat);

// // 새로운 프로퍼티 동적 (실행중)제거
// delete cat.master;
