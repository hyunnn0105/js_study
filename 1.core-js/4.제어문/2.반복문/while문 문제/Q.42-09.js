
// var num = +prompt(`정수값 : `)
// var mark = '\t'
// var a = 1;

// while (num >= a) {
//     num += num%a mark
//     a++;
// }
// alert(`${num}`);


var num = +prompt('정수값: ');
var i = 1;
var message = '';
while (i <= num) {
    if (i % 2 === 1) {
        message += i + ' ';
    }
    i++;
}
alert(message);