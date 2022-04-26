
var money = 5000;
var food; //m<=5000 or ramen 저장

// if (money >= 5000){
//     food = '김치찌개';
// } else {
//     food = 'ramen'
// }

var food = money >= 5000 ? '김치찌개' : '라면';

//5천원 넘으면 김치찌개, 3천원 이상 라면, 3천원 이하 굶기

var food = money >= 5000 ? '김치찌개' : money >= 3000 ? '라면' : '굶음'

var food;
if (money >= 5000){
    food = '김치찌개'
}
else if (money >= 3000){
    food = '라면'
}
else {
    food = '굶음'
}
