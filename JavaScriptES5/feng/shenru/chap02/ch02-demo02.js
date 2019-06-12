/**
 * 这里讨论词法作用域
 * */



f();
function f() {
    return scope;
}
var scope = "local scope";


f();
var scope = "local scope";
function f() { return scope; }




(function(){
    e="default";
    try{
        throw "test";
    }catch(e){
        var e,x=123;
        console.log(e); //test
        console.log(delete e); //false
        e=456;
        console.log(e); //456
    };
    console.log(x); //123
    console.log(e); //default
    console.log(window.e); //default
})();

