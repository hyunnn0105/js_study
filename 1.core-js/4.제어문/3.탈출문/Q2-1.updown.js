// var ran = Math.floor(Math.random() * 50) + 1;

// for (c = 5; c <= 0; count--) {
//     var num = +prompt(`
//         ~~~~~~재미있는 UP&DOWN 게임~~~~~~
//         [1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!!]
//         `);
//     if (num === ran) break;
//     else if (ran < num) {
//         alert(`down!!! 기회가 ${`count`}번 남았습니다.`);
//     }
//     else if (ran > num) {
//         alert(`up!!! 기회가 ${`count`}번 남았습니다.`);
//     };
// }
// alert(`반복문 종료`);

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

var ran = Math.floor(Math.random() * 50) + 1;
var c = 5;

while (true) {
    var num = +prompt(`
        ~~~~~~재미있는 UP&DOWN 게임~~~~~~~~
        [1 ~ 50 사이의 무작위 숫자를 5번 안에 맞춰보세요!!!]
        `);
    c--;
    if (num === ran) break;
    else if (ran < num) {
        alert(`down!!! 기회가 ${c}번 남았습니다.`);
    }
    else if (ran > num) {
        alert(`up!!! 기회가 ${c}번 남았습니다.`);
    }
    
    if(c <= 0){
        alert(`gameover`)
    }
    else{
        alert (`${c}번의 `)
    }
}
alert(`반복문 종료`);