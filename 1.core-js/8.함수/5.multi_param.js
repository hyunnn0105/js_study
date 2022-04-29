
//2개의 정수를 전갈하면 그 합을 구해주는 함수
function add2(n1, n2){
    return n1 + n2;
}

function add3(n1, n2, n3){
    return n1 + n2 + n3;
}

//n개의 정수를 전달하면 그 합을 구해주는 함수
function addAll(numbers){
    var total =0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}

//ES6+
function addAll2(...numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}

var result1 = addAll([10, 20, 30, 40, 50]);
console.log(`r1: ${result1}`);

var result2 = addAll2(10, 20, 30);
console.log(`r2: ${result2}`);

