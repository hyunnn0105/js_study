// 3회 반복 * 3회 반목

//정사각형의 높이
var height = 6;
var star = ''; //star 저장
for ( var j = 0; j < height; j++){
    for (var i = 0; i < height; i++){
        star += '*\t';
    }
star += '\n';
}
console.log(star);