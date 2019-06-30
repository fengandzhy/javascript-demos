/**
 * 揭秘命名函数表达式
 *
 *
 *
 * */

function foo(){} // 声明，因为它是程序的一部分
var bar = function foo(){}; // 表达式，因为它是赋值表达式的一部分

new function bar(){}; // 表达式，因为它是new表达式

(function(){
    function bar(){} // 声明，因为它是函数体的一部分
})();

(function foo(){}); // 函数表达式：包含在分组操作符内







/**
 * 千万别这样做！因为有的浏览器会返回first的这个function，而有的浏览器返回的却是第二个
 *
 * */
if (true) {
    function foo() {
        return 'first';
    }
}
else {
    function foo() {
        return 'second';
    }
}
foo();

/**
 * 调试
 * */
function foo(){
    return bar();
}
function bar(){
    return baz();
}
function baz(){
    debugger;
}
foo();


function foo(){
    return bar();
}
var bar = function(){
    return baz();
}
function baz(){
    debugger;
}
foo();






