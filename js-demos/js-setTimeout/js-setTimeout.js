
/**
 * js 会优先处理非定时器的代码, 完后再处理定时器的. 所以最后输出是3
 * */
let a;
a = 3;
setTimeout(function(){
    a = 5;
},0);
console.log(a); // 3;
