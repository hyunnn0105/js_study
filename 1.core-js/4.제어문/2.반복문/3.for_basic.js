//안녕을 5번 출력
for (var i = 0; i < 5; i++){
    console.log('안녕');
}


var i = 0;
while ( i < 5) {
    console.log('안녕');
    i++;
}
/*
    -횟수가 확실하게 지정된 반복문은 for 사용 good
    -코드가 섞일 가능성이 있어서 for 사용 
    -횟수가 정해지지 않은 반복문은 whlie 사용

*/

//카운트다운
for (var m = 5; m >= 0; m--){
    console.log(`${m}!!`);
}
console.log(`==============================`);


//1~10 까지의 총합
var total = 0; //총합을 저장할 변수
total =+ 1;
for (var k =1; k<=10  k++) {
    total += k; 
}
console.log(`총합: ${total}`);
console.log(`==============================`);