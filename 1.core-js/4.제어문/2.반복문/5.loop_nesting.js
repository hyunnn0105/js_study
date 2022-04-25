
for(var i= 1; i <= 3; i++){  //3회 루프
    console.log(`헬로`); //3회 실행
    for (var j =1; j <= 4; j++){  //4회 루프
        for (var k = 1; k<=2; k++){  //2회 루프
            console.log(`안녕! ${i} - ${j}`); //24회 실행
        }  
        console.log(`메롱`); // 12회 실행
    }
}



var level = 2; //단수저장
for (var line = 1; line <= 9; line++){
    console.log(`${level} X ${line} = ${level*line}`);
}
console.log(`===============================`);


for (var level = 2; level<= 9; level++) {
    for (var line = 1; line <= 9; line++){
        console.log(`${level} X ${line} = ${level*line}`);
    }
}   //end inner for
console.log(`===============================`);
//end outer for



