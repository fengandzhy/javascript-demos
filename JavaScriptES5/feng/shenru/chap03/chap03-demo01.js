/**
 * 这里是执行上下文栈
 * */

var a = {n:1};
var b =a;
a.x=a={n:2};
console.log(b);
console.log(a,b);




function f() { console.log('I am outside!'); }
(function () {
    f();
    if (true) {
// 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }
}());
