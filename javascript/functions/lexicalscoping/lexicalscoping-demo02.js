/**
 * 由于在javascript中，它只有两种作用域，全局作用域和函数作用域. 所以b{}这个不是作用域,ES5没有块级作用域
 * 所以函数fn的父级作用域是，全局作用域, 而在该全局作用域中只有两个变量o和a.
 * 所以这里的console.log(a)必然会输出10
 *
 * 下面的例子就不一样了，它会输出12
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

o.b.fn(); // 10

var a = 10;
var o = {
    b:{
        a:11,
        fn:function(){
            var a = 12;
            function f1(){
                console.log(a);
            }
            f1();
        }
    }
}
o.b.fn(); // 12

