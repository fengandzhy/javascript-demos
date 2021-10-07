/**
 * 1.如果想运行 checkscope.f(); 那么这个函数f必须定义在checkscope的原型对象上. 或者直接在checkscope上定义
 * checkscopt.c = function(){}
 *
 *
 * */
function checkscope(){
    var scope = 'local scope';
    function f(){
        console.log('abc');
        return scope;
    }
    return f();
}

checkscope.__proto__.f = function(){
    console.log('We are here');
}

checkscope.f();

checkscope.c = function (){
    console.log('Hello World');
}

checkscope.c();