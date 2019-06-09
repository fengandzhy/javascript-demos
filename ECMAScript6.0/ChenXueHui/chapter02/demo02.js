/***
 *  自执行函数 立即调用的函数表达式

 * 函数声明不能直接调用的原因
 * 	1、小括号里只能放表达式，不能放语句
 * 	2、function关键字既可以当作语句，也可以当作表达式。但js规定function关键字出现在行首，一律解释成语句
 *
 * 	解决方法：不要让function出现在行首
 * 		1、用括号把function主体括起来，转成表达式。后面加括号运行
 * 		2、借助运算符（new + - ! ~ typeof , && ||...）
 * 			因为运算符会把表达式执行，执行后得出结果了才能运算
 */

/**
 * 以下就是自执行函数
 * */
(function f1(){
    console.log('aa');
})();

const fn1=function(){
    console.log('这是一个函数表达式');
}();
console.log(fn1);//undefined
const fn2=function(){
    return 3;
}();
console.log(fn2);//3

/**
 * 以下是函数声明
 * 但js规定function关键字出现在行首，一律解释成语句
 * 所以，
 * function fn2(){
    console.log('这是一个函数声明');
}()
 无法执行
 * */
function fn2(){
    console.log('这是一个函数声明');
}


/**
 * 以下是函数表达式，因为function出现在了小括号里
 * 所以，
 * (function fn2(){
    console.log('这是一个函数声明');
});
 可以执行
 * */
(function fn2(){
    console.log('这是一个函数声明');
});



/**
 * 以下是将函数转变成表达式的方式
 * */
(function fn2(){
    console.log('这是一个函数声明');
})();
(function fn2(){
    console.log('这是一个函数声明');
}());

//把函数变成表达式的方式
0+function(text){
    console.log(text);
}('与数字相加变成表达式');

true&&function(text){
    console.log(text);
}('利用逻辑运算符变成表达式');

false||function(text){
    console.log(text);
}('1利用逻辑运算符变成表达式');

0,function(text){
    console.log(text);
}('2利用逻辑运算符变成表达式');

~function(text){
    console.log(text);
}('3利用逻辑运算符变成表达式');

-function(text){
    console.log(text);
}('利用+-!~变成表达式');

typeof function(text){
    console.log(text);
}('typeof');

new function(text){
    console.log(text);
}('new');
