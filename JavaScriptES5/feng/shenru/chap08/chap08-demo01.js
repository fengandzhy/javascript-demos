/**
 * 闭包
 * */


/**
 *
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

