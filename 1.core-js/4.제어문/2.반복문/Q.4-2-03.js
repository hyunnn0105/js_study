var a = +prompt(`양의 정수 : `);

if ( a > 0 ) {
    var star = '';
    var i = 1;
    while (i <= a) {
        star += '*\n';
        i++;
    }
    alert(`${star}`)
}