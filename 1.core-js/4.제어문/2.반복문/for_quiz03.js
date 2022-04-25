

var sn = +prompt(`몇 개의 *를 표시할까? : `);
var enter = +prompt(`몇 개마다 줄바꿈 할까요? :`); 
var star =''
var line = parseInt(sn/enter);

for ( var i = 0; i < line; i++){
    for (var j = 0; j < enter; j++){
        star += '*';
    }
    star += '\n';
}
//남은 별의 개수
var rest = sn % enter;
if (rest > 0){
    for (var k = 0; k < rest; k++) {
        star += '*';
    }
}
alert(`${star}`);
// var n = +prompt('몇 개의 *를 출력할까요?');