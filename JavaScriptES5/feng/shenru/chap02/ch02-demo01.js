/**
 * 这里讨论词法作用域,
 * 在JavaScript中只有两种作用域，一个是全局作用域，一个是函数作用域。
 * */



/**
 * 当执行 foo 函数的时候,先从 foo 函数内部查找是否有局部变量 value，如果没有，它会去它的父级作用域去找，
 * 在这里它的父级作用域是全局作用域.
 *
 * */
var value = 1;
function foo() {
    console.log(value);
}
function bar() {
    var value = 2;
    foo();
}
bar();


/**
 * return f()的意思是，return 执行函数f的返回值,
 * 如果执行函数f没有返回值（其实所谓的没有返回值就是返回是undefinied）,那就返回undefined
 *
 * 同理,f函数父级作用域是checkscope函数的作用域.
 * 在checkscope函数的作用域当中，scope 有被定义值, 所以当f()时，它会去找父作用域里的scope值，所以返回的是local scope *
 * */
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();


var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();//返回的是一个函数，再执行这个函数



/**
 * 由于在javascript中，它只有两种作用域，全局作用域和函数作用域. 所以b{}这个不是作用域,ES5没有块级作用域
 * 所以函数fn的父级作用域是，全局作用域, 而在该全局作用域中只有两个变量o和a.
 * 所以这里的console.log(a)必然会输出10
 * */
var a = 10;
var o = {
    b:{
        a:11,
        fn:function(){
            console.log(a);
        }
    }
}
o.b.fn();









f('abc');
function f() {
    return scope;
}
var scope = "local scope";


f();
var scope = "local scope";
function f() { return scope; }




(function(){
    e="default";
    try{
        throw "test";
    }catch(e){
        var e,x=123;
        console.log(e); //test
        console.log(delete e); //false
        e=456;
        console.log(e); //456
    };
    console.log(x); //123
    console.log(e); //default
    console.log(window.e); //default
})();

