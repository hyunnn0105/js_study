
//Falsy
if(undefined)console.log('ok1');
if(null)console.log('ok2');
if(0)console.log('ok3');
if('')console.log('ok4');
if(NaN)console.log('ok5');

console.log(`================================`);

//truthy
if(1)console.log('ok6');
if(-77.999)console.log('ok7');
if('메롱')console.log('ok8');
if('  ')console.log('ok9'); //공백도 하나의 문자
if([1,2,3])console.log('ok10');
if([])console.log('ok11');

console.log(`================================`);

var num = 9;
if  (num % 2 === 0) {
    console.log(`홀수`);
}
else {
    console.log(`짝수`);
}

console.log(`=============================`);

var apple = 10;
if (apple){
    console.log(`사과가 ${apple}개 있습니다.`);
}
else {
    console.log(`사과가 하나도 없습니다.`);
}

console.log(`=================================`);

var apple = 0;
if (!apple){
    console.log(`사과가 하나도 없습니다.`);
}
else {
    console.log(`사과가 ${apple}개 있습니다.`);
}

var result;

if (result) {
    console.log(`안녕!`); //falsy = result
}

/*
var n = 99;

while (n) {
    //무한루프 === true
}
*/

