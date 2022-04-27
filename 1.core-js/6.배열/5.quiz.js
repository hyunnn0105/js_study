/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/


// var numbers = [];
// var stop = '그만';

// while ( true ) {
//     var input = prompt(`숫자를 입력하세요. \n 그만두려면 \'그만\'이라고 입력하세요.`);
//     var average = numbers/numbers.length

//     if (input === stop){
//         alert(`${+(numbers)} \n (${average})`)
//         break;
//     }
//     else {

//     }
// }



// for (var i = 0; i < numbers.length; i++) {
//     var input = +prompt(`숫자를 입력하세요. 
//     \n 그만두려면 '그만'이라고 입력하세요.`);
//     var average = numbers/numbers.length
//     if (input === stop){
//                 alert(`${numbers[i]} \n (${average})`)
//                 break;
//             } else {
                
//             }
            
//         }


//사용자의 입력숫자를 저장할 배열
var numbers = [];

while (true) {
    var i = prompt('숫자를 입력하세요.\n그만 두려면 \'그만\'이라고 입력하세요.');
    if (i === '그만') break;

    numbers.push(+i);
}

//총합 계산
if (numbers.length > 0) {
    var total = 0;
    for (var num of numbers) {
        total += num;
    }
    alert(`입력한 숫자 목록 [${numbers}]\n입력한 숫자 총합: ${total}`);
}