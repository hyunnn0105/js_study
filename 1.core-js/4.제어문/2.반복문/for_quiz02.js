//긴쪽의 변이 가로 - 짧은 쪽이 세로?

var width = +prompt(`한변(1):`);
var height = +prompt(`한변(2):`);
var star = '';
if ( width > height ) {
    for (var j = 0; j < height; j++) {
        for (var i = 0; i < width; i++) {
            star += '* ';
        }
        star += '\n';
    }
    alert(`${star}`);
}
else if ( width < height ) {
    var save = 0;
    var save = width;
    var width = height;
    var height = save;

    for (var j = 0; j < height; j++) {
        for (var i = 0; i < width; i++) {
            star += '* ';
        }
        star += '\n';
    }
    alert(`${star}`);
}


/*
    //가로, 세로 길이
    var width = 4;
    var height = 5;
    var star = '';

    //가로 세로 보정
    if (width < height) {
        var t = width;
        width = height;
        height = t;
    }

    for (var i = 0; i < height; i++) {
        for(var j = 0; j < width; j++) {
            star += '*  ';
        }
        star += '\n';
    }
    console.log(star);
*/