
// function fn(e){
//     var e;
//     console.log(e);
// }
// fn('test');
/**
 * catch创建的块作用域，只对catch的参数有效。对于在内部声明的变量，catch并没有创建一个新的作用域，只是一个普通的代码块。
 * 但是, 当你var e; 的时候，变量提升并不是在 这个 catch的顶层而是到外一层的作用域顶层
 * */

(function(){
    e="default";
    try{
        throw "test";
    }catch(e){ // 这里的catch 仅仅是对e来说可以看成是一个特殊函数，特殊在当你var e;的时候，还是要提升到外边去，其他的不变
        var e,x=123; // 这里并没有给e 赋值
        console.log(e); //test
        console.log(delete e); //false
        e=456;
        console.log(e); //456
    };
    console.log(x); //123
    console.log(e); //default
    console.log(window.e); //undefined
})();

function foo(){
    e='aaa';
    try{
        throw new Error('this is an error');
    }catch(e){
        console.log(e);
    }
    console.log(e); // aaa;
    console.log(window.e);// aaa
}
foo();



function foo(){
    e='aaa';
    try{
        throw new Error('this is an error')
    }catch(e){
        var e; // 这个e会提升到 foo的顶部
        console.log(e);
    }
    console.log(e);
    console.log(window.e);
}
foo();


function foo(){
    e='aaa';
    try{
        throw new Error('this is an error')
    }catch(e){
        var e;
        console.log(e);
        e='this is not an error';
        console.log(e);
    }
    console.log(e);
    console.log(window.e);
}
foo();


function foo(){
    e='aaa';
    function fn (e){
        var e;
        console.log(e);
        e='this is not an error';
        console.log(e);
    }
    fn('test');
    console.log(e);
    console.log(window.e);
}
foo();


