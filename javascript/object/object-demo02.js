/**
 * 1. ch是checkscope new出来的, 但是在checkscope里面没有东西绑定到this上, 所以ch输出就是checkscope {} 里面没有任何属性
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