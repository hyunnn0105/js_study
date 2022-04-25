// var num = +prompt(`
//         ~~~~~~~~~~~~~~~재미있는 UP&DOWN 게임~~~~~~~~~~~~
//         [1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!!]
//         `);
// var ran = Math.floor(Math.random() * 50) + 1;
// var i = 1;
// var num = +prompt(`a`);
// while ( num === ri ){

//     if (ran < num) {
//         alert(`dow5n!!!`);
//     }
//     // i++;
//     else if (ram > num ){
//         alert(`up!!!`);
//     }
//     // i++;
//     else {
//         alert(`딩동댕~~~~`);
//     }
// }

var ran = Math.floor(Math.random() * 50) + 1;

while (true) {
    var num = +prompt(`
        ~~~~~~재미있는 UP&DOWN 게임~~~~~~~~
        [1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!!]
        `);
    if (num === ran) break;
    else if (ran < num) {
        alert(`down!!!`);
    }
    else if (ran > num) {
        alert(`up!!!`);
    }

}
alert(`반복문 종료`);

// var num = +prompt(`
// ~~~~~~~~~~~~~~~재미있는 UP&DOWN 게임~~~~~~~~~~~~
// [1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!!]
// `);
// var ran = Math.floor(Math.random() * 50) + 1;
// var i = 0;
// var count = ''
// for(i=0; num =< ran; i++){
//     if ( num < ran ){
//         alert(`down!!!`)
//     }
//     else if (num > ran ){
//         alert(`up!!!`)
//     }
//     count++;
// }