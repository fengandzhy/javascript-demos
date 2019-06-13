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

/**
 * 此时输出就是11，此时执行f1时，它的父作用域是fn
 * */
var a = 10;
var o = {
    b:{
        a:11,
        fn:function(){
            var a = 11;
            function f1(){
               console.log(a);
            }
            f1();
        }
    }
}
o.b.fn();



/**
 * with(nightn)的意思就是将nightn里面大括号的内容添加到了作用域链的顶端，所以当执行第一个console.log(name); 必然输出nightn，
 * 因为 作用域是三个，最外层是全局作用域，其次是函数testWith的作用域，最里面是nightn这个变量大括号带来的临时的块级作用域，
 * 而在这个临时的块级作用域里面name值是nightn,所以输出nightn
 *
 * 另外由于这个临时块级作用域的存在，我们可以直接输出console.log(age);而不需要console.log(nightn.age);
 *
 * 还有，x是with里面定义的，当with块执行完成后,x照样能够输出，with 语句只是在当前执行环境的作用域链上临时添加给定对象，
 * 它并不像函数调用那样创建一个新的执行环境，with里面定义var x =1;其实就相当于在函数testWith里面定义var x =1;
 *
 * 我们不推荐使用with语句,它只是帮助我们了解作用域的知识
 *
 * */
var nightn = {
    name: 'nightn',
    age: '24'
};
function testWith() {
    var name = 'foo';
    var bo = 'abc';
    with(nightn) {
        var x = 1;
        console.log(name); // nightn
        console.log(age); //输出临时作用域里面的age
        console.log(bo); //输出外层作用域的变量bo
        console.log(nightn.age); //输出全局作用域里的变量nightn
    }
    console.log(name); // foo
    console.log(x); // 1
}
testWith();


/**
 * try catch的机制其实跟with差不多
 * */
try {
    undefined();
} catch (err) {
    var innerCatch = 'hello';
    console.log(err); // 可以正常打印 err 对象
}
console.log(innerCatch); // hello






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

