//변수이름을 생각하고 만들어라
//identifier : 식별자
// L 데이터를 구별하기위한 고유한 이름(변수,함수 등)

//1.식별자 이름은 대소문자를 구별한다.
var apple = '사과';
apple = '맛있는 사과';
APPLE = 'no-mat';
var Apple = 'A+';

console.log(apple);

//2.숫자로 시작하거니 숫자만으로 구성하면 안됨
//var 999 = 'gugugu' XXXX
//var 7lucky7 = 'good luck' xxxx
var lucky7 = '777'; //ok
var a99le = 'its apple'; //ok

//3.특수문자는 '$','_' 만 사용가능
//var hello! = '반가워!'; XXXX
var $bye$$ = 'ok';
var _my_family_ = 'OK~~';

//4. 띄어쓰기 불가능
//var our vip members address = 'korea'; XXXX

//snake case (비추)
var our_vip_members_address = 'korea'; // OK

//camel case (추천) - 시작할때 소문자 사용
var ourVipMembersAddress = 'korea'; //OK


//5.키워드(예약어)는 사용하지 말 것
// keyword:미리 정해져있는 기능적 단어
// var var = 11; XXXX
// var if = 32; XXXX


//이름은 구체적이고 명확하고 일관성있게 작성하기
var a = 'honggildong'; // var memberName;
var b = 'seoul'; // var memberAddress;
var c = 30; // var memberAge;
var d = '19990101' //var userBirthDay; <- 일관성있게~~

//alert - 서버?에서만 사용가능?



