/**
 * 1. f1是fn1 new 出来的, 所以只有在fn1的里面绑定在this后面的属性和方法才会出现在f1里面
 *
 *
 * */

function fn1(val1,val2){
    this.val1 = val1;
    this.val2 = val2;
    this.fun = function(){
        console.log('abc');
    }
}

var f1 = new fn1('a','b');
console.log(f1);
f1.fun();

/**
 * 2. ch是checkscope new出来的, 但是在checkscope里面没有东西绑定到this上, 所以ch输出就是checkscope {} 里面没有任何属性
 *
 *
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

var ch = new checkscope();
console.log(ch);
var a = checkscope();
console.log(a);



