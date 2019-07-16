/**
 * 关于ES6中函数的声明
 * 允许在块级作用域内声明函数。
   函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
   同时，函数声明还会提升到所在的块级作用域的头部。
 * */

/**
 * 函数f()声明到了块级作用域里面，它只能部分提升到外面的函数作用域，所以f是undefined.
 * 函数声明在条件语句内虽然可以用，但是没有被标准化，也就是说不同的环境可能有不同的执行结果，所以这样情况下，最好使用函数表达式
 *
 * ============================================
 * 上面写的不确切，在块里面就是在这两个{}里面，函数的声明就相当于函数表达式function f() { console.log('I am inside!'); }
 * 相当于 var f = function(){console.log('I am inside!');}
 *
 * */
function f() { console.log('I am outside!'); }
(function () {
    console.log(f);//undefined 相当于var f = undefined
    if (true) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }
}());

function f() { console.log('I am outside!'); }
(function () {
    console.log(f);//undefined 相当于var f = undefined
   {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }
}());

/**
 *
 * */
function f() { console.log('I am outside!'); }
(function () {
    if (true) {
        f();
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }
}());



function f() { console.log('I am outside!'); }
(function () {
    f();
}());

function f() { console.log('I am outside!'); }
(function () {
    f();
    function f(){
        console.log("I am inside!")
    }
}());

let a = 3;
(function () {

    if (false) {
       let a = 4;
    }
    console.log(a);
}());
