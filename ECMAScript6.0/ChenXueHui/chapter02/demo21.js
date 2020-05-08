/**闭包*/


/**
 * 按照陈旭辉的意思是，一个函数，能够访问到父作用域里的变量就构成了一个闭包
 * 例如下例，sonFn能够访问到innerFn和wrapFn里的变量，那么就构成了一个闭包
 *
 * 按照冯的观点，闭包要具备这两点，
 * 1. 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
 * 2. 在代码中引用了自由变量
 * 基本上也是一样的意思.
 *
 * */
const wrapFn = ()=>{
    const a =10;
    return innerFn = ()=>{
        const b =20;
        return sonFn=()=>{
            console.log(a);
            console.log(b);
            debugger;
        }
    }
}
wrapFn()()();


/**
 * a对于f2来说也是自由变量
 * 另外f1上下文销毁了,f2仍然可以访问
 * */
function f1(a){
    return f2=function () {
        console.log(a);
        debugger;
    }
}
f1(1)();


function f1(a){
    var f2=function () {
        console.log(a);
    }
    var f3 = function(){
        debugger;
    }
    f3();
}
f1(1);


/**这是个立即执行函数*/
;(function(window,yx,undefined){
    var _count=0;
    yx.lg=function(v){
        //debugger;
        return console.log(v);
    }
    debugger;
})(window,window.yx||(window.yx={}));
yx.lg('aabbcc');









