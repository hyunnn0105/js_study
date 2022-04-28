
var phone = {
    company:'삼성',
    color:'펄화이트',
    model:'갤럭시 S21',
    price:1200000
};

// *** in - 객체사용
for ( var prop in phone) {
    console.log(phone[prop]);
}

//객체내부의 특정키 존재여부 확인
console.log(`===============================`);
var color = 'color';
var haskey = 'color'

phone.memory = '16GB'

var haskey = 'memory' in phone;
console.log(haskey);