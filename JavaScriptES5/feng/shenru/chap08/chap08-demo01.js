/**
 * 闭包
 * */


/**
 * 关于闭包首先要注意这一点,例如下面连个例子
 * 虽然函数foo执行的时候，函数checkscope已经从执行上下文栈当中弹出，但是垃圾回收机制不会将其回收，至少不会将AO上的scope对象回收
 * 所以foo还是能够访问到的
 *
 * */
function checkscope(){
    var scope = "local scope";
    function f(){
        console.log(scope);
        scope = 'leeee' //此处的scope是放在了checkscope的AO中,还是放在了全局上下文的VO呢
        console.log(scope);
    }
    return f;
}
var foo = checkscope();
foo();

var a = (function fn(){
    var local = "abc";
    return function f1(){
        debugger;
        console.log(local);
    }
    console.log(local);
})();
a();

/**
 * 输出的都是3,
 * 因为函数data[0],data[1],data[2]执行的时候会向其父作用域里查找i,而此时其父作用域里的i已经变成了3
 *
 * 通俗的话讲就是，在函数定义的时候，确定词法作用域链，就是说告诉函数，你要到哪个作用域里去找值，但是找的时候具体找到的是几，这个只有在函数激活的时候才知道了
 * 这个例子在函数激活的时候找到的是3
 * */
var data = [];
for (var i = 0; i < 3; i++) {
    data[i] = function () {
        console.log(i);
    };
}
data[0]();
data[1]();
data[2]();


/**
 * 1.虽然在data[0]它们调用的时候，里面的那个fn函数已经执行完成了，它的执行上下文也从执行上下文栈中弹出，但是由于它的变量还是被里面的匿名函数引用，所以它不会被回收
 * 2.当data[0]它们调用的时候，它会向父作用域里取这个index，而此时父作用域不是全局作用域而是函数作用域，它里面的index分别是1,2,3
 * 
 *
 * */
var data = [];
for (var i=0;i<3;i++){
    data[i] = (function fn(index){
        return function(){
            console.log(index);
        }
    })(i+1);
}

data[0]();
data[1]();
data[2]();







