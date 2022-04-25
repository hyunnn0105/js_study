
var ri = Math.floor(Math.random() * 8) + 2;
console.log(`
============================
랜덤 구구단 ${ri}단
============================
`);
for(i=1; i<10; i++){
    console.log(`${ri} X ${i} = ${ri*i} `);
}
