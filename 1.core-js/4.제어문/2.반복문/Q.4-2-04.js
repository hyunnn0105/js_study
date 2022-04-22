var a = +prompt(`양의 정수 : `);

if (a > 0) {
    var mark = '';
    var i = 1;
    while (i <= a) {
        if ( i % 2 == 1){
            mark += '+'
        }
        else {
            mark += '-'
        }
        i++;
    }
    alert(`${mark}`)
}
