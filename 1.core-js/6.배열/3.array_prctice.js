//for of + for

var total = 0;
var dayofWeeks = ['월', '화', '수', '목', '금', '토', '일'];

for (var day of dayofWeeks){
    console.log( day +'요일');
}

console.log(`=================================`);

for ( i = 0; i < dayofWeeks.length; i++) {
    console.log(`${dayofWeeks[i]}요일`); 
}

console.log(`=================================`);

var t = 0;
var foods = [ '짜장면', '짬뽕', '볶음밥', '마라탕', '탕수육'];
var message = ''

for ( i = 0; i< foods.length; i++) {
    if ( i === foods.length - 1){
        message += `${foods[i]}!!`
    }
    else {
        message += `${foods[i]}과 `
    }
    
}
console.log(message);

