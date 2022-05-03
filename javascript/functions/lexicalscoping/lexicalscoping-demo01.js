/**
 * 当执行 foo 函数的时候,先从 foo 函数内部查找是否有局部变量 value，如果没有，它会去它的父级作用域去找，
 * 在这里它的父级作用域是全局作用域. 词法作用域只跟函数的定义有关系，跟在哪运行没有关系,所以虽然foo是在bar中运行的
 * 但这不意味着它的父级作用域就是bar
 * */
var value =1;
function foo(){
    console.log(value);
}
function bar(){
    var value = 2;
    foo();
}
bar();





(function(){
    e="default";
    try{
        throw "test";
    }catch(e){ // 这里的catch 是一个函数
        // var e,x=123; // 这里的e 并没有被赋值
        var e;
        var x = 123;
        console.log(e); //test
        console.log(delete e); //false
        e=456;
        console.log(e); //456
    };
    console.log(x); //123
    console.log(e); //default
    console.log(window.e); //undefined
})();

function fn(){
    function fn1(e){
        var e,x=123;
    }
    fn1(3);
    console.log(x);
}
fn();
console.log(b);

function foo(){
    e='aaa'
    try{
        throw new Error('this is an error')
    }catch(e){
        console.log(e);
        var x = 3;
    }
    console.log(x);
    console.log(e);
    console.log(window.e);
}
foo();
