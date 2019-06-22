/**
 * 这里是执行上下文栈, 这里有这么几个概念非常重要
 *
 * 1. 什么叫可执行代码(executable code)
 * javascript中可执行代码只有三种,全局代码，函数代码，eval里面的代码,由于eval代码已经基本不建议使用，这里不做讨论
 *
 * 2.什么叫执行上下文? execution context
 * 当javascript遇到可执行代码的时候，就会进入执行上下文,就是指当前代码的执行环境，执行上下文(简称-EC)是ECMA-262标准里的一个抽象概念，
 * 用于同可执行代码(executable code)概念进行区分。
 * 另外JS当中执行上下文只有三种
 * 1. 全局环境 js代码运行起来首先进入的就是这个环境
 * 2. 函数环境 当函数被调用时，才会进入这个环境
 * 3. eval环境 已经不被建议使用
 *
 * 切记，注意，千万不要跟执行上下文跟作用域搞混, ES5有两种作用域，一种全局一种函数, ES6有三种作用域, 全局，函数， 块级作用域
 * 但是执行上下文无论ES5,ES6只有三个， 一个全局，一个函数，一个eval
 *
 *
 *
 * 3.什么叫执行上下文栈? Execution context stack
 * 活动的执行上下文组在逻辑上组成一个堆栈。堆栈底部永远都是全局上下文(global context)，而顶部就是当前(活动的)执行上下文，
 * 当javascript运行到一个可执行代码时，它会把当前的执行上下文压入执行上下文栈,当这个可执行代码执行完成时，当前的执行上下文弹出栈
 * 只有当整个应用程序结束的时候，ECStack 才会被清空，所以程序结束之前， ECStack 最底部永远有个 globalContext
 *
 *
 *
 * */


/**
 * 以下代码执行上下文栈是这样的
 * 当执行var scope = "global scope";
 * ECStack.push(globalContext);
 * 当执行checkscope();
 * ECStack.push(<checkscope> functionContext);
 * 当执行return f();
 * ECStack.push(<f> functionContext);
 * f()执行完毕后
 * ECStack.pop(); //弹出<f> functionContext
 * checkscopt()执行完成后
 * ECStack.pop(); //弹出 <checkscope> functionContext
 * 程序整个完成后
 * ECStack.pop(); //弹出 globalContext)
 *
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



/**
 * 这段代码里一共有两个对象，我们分别给这两个对象取个名字：objA = { n: 1 }; objB = { n: 2 };
 * 在执行 a.x = a = { n: 2 }前a和b都指向objA；
 * 点运算符优先级高，所以a.x=a={n:2}这句话先执行a.x，这里a指向objA，也就相当于把原先的代码替换成了objA.x = a =objB；
 * 然后执行赋值运算，从右往左，所以执行a = objB，a是个变量，它现在指向objB；
 * 再往左，执行赋值运算，objA.x = a，相当于objA.x = objB。此时objA被修改；
 * 到此，已经很明白了，b始终指向objA，但是objA在a.x = a = { n: 2 }已经被修改
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





var foo = {x: 10};

var bar = {
    x: 20,
    test: function () {

        console.log(this === bar); // true
        console.log(this.x); // 20
        console.log(this);
    }

};

bar.test(); // true, 20

foo.test = bar.test;

// 不过，这里this依然不会是foo
// 尽管调用的是相同的function

foo.test(); // false, 10


var foo = {
    bar: function () {

    }
};


(foo.bar)



function foo() {
    console.log(this);
    return function() {
        console.log(this)
    }
}
foo()();


var foo = {
    value: 2,
    bar: function () {
        return this.value;
    }
}
(foo.bar = foo.bar);


function Foo(){
    var getName = function(){
        console.log(1);
        console.log(this);
    };
    console.log(getName());
    return this
}

function getName(){
    console.log(5);
}

Foo().getName();







































