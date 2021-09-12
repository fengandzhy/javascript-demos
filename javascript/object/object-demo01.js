/**
 * 1. f1是fn1 new 出来的, 所以只有在fn1的里面绑定在this后面的属性和方法才会出现在f1里面
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