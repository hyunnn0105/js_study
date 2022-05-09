//외부 js파일 로당
// import { x,hello } from './park.js';
//조각파일은 파일명.mjs 사용함

//as 뒤에 별칭-맘대로해도 상관X
import * as k from './kim.mjs'
import * as p from './park.mjs'


//변수 값 앞에 'k.', 'p.' 추가해서 사용히면 같은 이름도 ok

//main ================================================

const $box = document.querySelector('.box');
console.log($box);
$box.textContent = '안녕';


console.log(k.x);
console.log(p.x);

k.hello();
p.hello();