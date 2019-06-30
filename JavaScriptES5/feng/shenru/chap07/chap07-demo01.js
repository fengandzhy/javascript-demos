/**
 * 执行上下文
 * */

var b =10;
(function b(b){
    b =20;
    console.log(b);
})(b);
console.log(b);

