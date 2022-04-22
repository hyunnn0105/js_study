var a = +prompt(' 정수 a');
var b = +prompt(' 정수 b');
var c = +prompt(' 정수 c');

if ( a === b && b ===c ) {
    alert(`3개의 값이 같습니다`);
}
else if (a===b || b===c || c===a){
    alert(`2개의 값이 같습니다`);
}
else {
    alert(`모두 다른 값 입니다`);
}
