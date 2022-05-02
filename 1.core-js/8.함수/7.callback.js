
// n회반복하면서 특정 일을 하는 함수 - 추상적
// 함수를 호출할 때 함수를 만들 수 있음

function foo(n, f) {
    for (var i = 0; i < n; i++){
        f();
    }
}

foo(5,function () {
    console.log(`안녕`);
});

// foo (3, function()){
//     console.log(`안녕2`);
//     console.log(`안녕3`);
// }


foo ( 2, () => console.log(`바이`))

//정수 n을 전달하면 1부터 n까지의 숫자를  특정조건에따라 출력하하느 함수

function showNumber(n) {
    for (var i = 0; i < n; i++){
        if (i%2===1){
            console.log();
        }
    }
}

//cd 롤백함수 : i의 특정조건을 담고있는함수
function showNumber(c, d) {
    for (var i = 0; i < n; i++){
        if (cd()){
            if (cd(i))
            console.log(i);
        }
    }
}

//1부터 10까지의 3배수 출력
showNumber(10,function(m) {
    return x %3 === 0;
});

// 1 ~ 100까지의 24의 배수 출력
showNumber(100, function(m) {
    return m % 24 === 0;
});



//1~24가지 숫자 중 홀수만 출력 + 메롱출력
showNumber(20,function(j){
    console.log(`메롱`);
    return j % 2 === 1;
});

//ex 봉제인형몸통

//======필터함수 구현======
//함수를 받아서 내부에서 이용
function customFilter () {
    var numbers
}

console.log(`=================================================`);

var numbers = [10, 30, 50, 22, 63, 250];
// var results = numbers.filter(function (n) {
//     return n <= 50;
// });
function customFilter(arr, predicate) {
    var resultSet = []; //필터링 후의 배열
    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            resultSet.push(arr[i]);
        }
    }
    return resultSet;
}


var results = numbers.filter(n => n <= 50); // n이 50보다 작으면 트루, 크면 false 리턴
var results = customFilter(numbers, n => n <= 50 ); //num->f(arr)

console.log(results);

console.log(`==================================================`);