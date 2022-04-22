
var a = +prompt(`양의 정수 : `);

if ( a > 0 ) {
    var star = '';
    var i = 1;
    while (i <= a) {
        star += '*';
        i++;
    }
    alert(`${star}`)
}



// else if (a === 0) {
//     alert(`${a}`)
// }
// else {
//     alert(`${a}`)
// }