/**
 * 1. 对于ES5来说在一个变量里定义函数你只能这么写fn:function(), 对于ES6来说, fn() 就可以这么写，调用还是一样的调用 o1.b.fn();
 * */

var o = {
    b:{
        a:11,
        fn:function(){
            console.log("We are here");
        }
    }
}
o.b.fn();

var o1 = {
    b:{
        a:11,
        fn(){
            console.log("We are here");
        }
    }
}
o1.b.fn();



