/***
 *  函数声明和函数表达式
 *  执行函数有几种方法？
 */

/**
 * function declaration
 * */
function f1(txt){
    console.log(txt);
}
f1('直接调用');
f1.call(f1,'用call调用');
f1.apply(f1,['用apply调用']);
new f1('用new调用的');
setTimeout(f1,1000,'用定时器调用');//参数分别是code, milliseconds, param1, param2, ..., param1,param2是code的传入参数
f1`用模板字符串调用`;//反引号
(function f1(txt){
    console.log(txt);
})('转成函数表达式调用');

/**
 * function expression
 * */
const fn2=function(text){
    console.log(text);
}('函数表达式调用');

/**
 * constructor
 * */
const fn3=new Function('x','y','console.log(x+y)');
fn3(1,2);
