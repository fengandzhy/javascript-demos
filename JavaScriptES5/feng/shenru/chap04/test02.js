var a =20;
if(true){
    a = 10;
    console.log(window.a===a);
    function a(){}
    console.log(window.a===a);
}

/**
 * 这块代码很好理解
 * 1. 因为变量提升, 第一个 console.log(window.a,a); 输出 f, f
 * 2. 由于执行到了var a = 30; 所以之后都是 30
 * */
console.log(window.a,a); //f, f
var a = 30;
console.log(window.a,a);// 30, 30
function a(){}
console.log(window.a,a); //30 ,30
console.log(window.a,a);//30,30


/**
 * 现在函数声明在了块里
 * 1. 在块外面由于变量提升的作用所以第一个console.log(window.a,a); 输出是 undefined, undefined
 * 2. 当执行到 第二个console.log(window.a,a); 的时候, 由于已经执行过 var a = 30 所以输出 30,30
 * 3. 当执行到 第三个console.log(window.a,a); 的时候, 由于已经执行过 var a = function(){}; 所以输出 f ,f
 * 4. 同理执行到第四个console.log(window.a,a); 的时候, 也是输出 f ,f
 * */
console.log(window.a,a); //undefined, undefined
var a = 30;
if(true)
{
    console.log(window.a,a);// 30, 30
    var a = function(){};
    console.log(window.a,a); //f ,f
}
console.log(window.a,a);//f,f


/**
 * 现在函数定义在了块里, 如果外层是全局作用域的, 定义在块里的函数是一定会提升到全局的VO上的, 只是提升的时机不同
 * 1. 对于定义在块里的函数, 在预解析阶段对于块之外就相当于 var a = function(){} 所以第一个 console.log(window.a,a); 输出undefined, undefined
 * 2. 当执行到 第二个console.log(window.a,a); 的时候, 此刻已经来带了块的里面. 在预解析阶段定义在块里的函数会被提升到块的顶端,但并不影响全局的同名变量
 * 也就是说, 当执行到 第二个console.log(window.a,a); 的时候, 由于变量提升的作用 a 被赋予成了函数的值f, 但没有影响到window.a 的值.
 * 所以第二个console.log(window.a,a); 输出 30, f
 *
 * 3. window.a 的值是要在执行到了 function a(){} 之后才发生改变, 也就是说当块里面定义函数function a(){} 在块里有个a 外面有个window.a
 * 块里的这个a 会在代码执行到 函数声明语句之后 才会去改写外面的 window.a
 *
 * 4. 当函数定义在块里时, 就相当于 let 前后都不能用let const
 *
 *
 * */
console.log(window.a,a); //undefined, undefined
var a = 30;
if(true)
{
    console.log(window.a,a);// 30, f
    function a(){}
    console.log(window.a,a); //f ,f
}
console.log(window.a,a);//f,f


/**
 * 现在函数定义在了块里
 * 1. 对于定义在块里的函数, 对于块之外就相当于 var a = function(){} 所以第一个 console.log(window.a,a); 输出undefined, undefined
 * 2. 当执行到 第二个console.log(window.a,a); 的时候, 块里的a 由于函数的提升变成了 f 但是尚未影响到window.a
 * 3. 当执行到 第三个console.log(window.a,a); 的时候, 块里的a 由于a =20; 块里的a 变成了 20 但是尚未影响到window.a
 * 4. 当执行到 第四个console.log(window.a,a); 的时候, 由于已经执行过了function a(){} 块里的a 会去渲染外面的window.a
 * 5. 当执行到 第五个console.log(window.a,a); 的时候, 由于执行了a = 10; 块里的a 再次变成了10, 由于没有再次的出现函数声明语句, 所以它不会影响外面的window.a
 * 6. 当执行到 第六个console.log(window.a,a); 的时候, 由于再次执行过了function a(){} 块里的a 会去渲染外面的window.a
 *
 * */
console.log(window.a,a); //undefined, undefined
var a = 30;
if(true)
{
    console.log(window.a,a);// 30, f
    a = 20;
    console.log(window.a,a);// 30, 20
    function a(){}
    console.log(window.a,a); //20 ,20
    a = 10;
    console.log(window.a,a); //20 ,10
    function a(){}
    console.log(window.a,a); //10 ,10
}
console.log(window.a,a);//10,10

/**
 * 用同样的方法也可以分析
 * 由于块里定义了一个函数b, 所以块里的b在预解析的阶段会被赋值成f 但是只有执行到function b(){} 才会影响到外面的window.b
 *
 * */
console.log(window.a,a,window.b,b); //undefined, undefined,undefined, undefined
var a = 30;
if(true)
{
    console.log(window.a,a,window.b,b);// 30, 30, undefined, f
    a = 20;
    console.log(window.a,a,window.b,b);// 30, 20, undefined, f
    function b(){}
    console.log(window.a,a,window.b,b); //20 ,20, f, f
}
console.log(window.a,a,window.b,b);//20,20, f, f


function fn(b){
    console.log(b);// undefined
    //var b = 2;
    if(true)
    {
        console.log(b);// f
        b=20;
        console.log(b);// f
        function b(){}
        console.log(b); //f
    }
    console.log(b);//f
}
fn(3);

function b() {
    var aaa = 329;
    console.log(aaa,bbb); //329,undefined
    if(true){
        console.log(aaa,bbb); //329,function
        function bbb() {
        }
        console.log(aaa,bbb); //329,function
        aaa = 321;
    }
    console.log(aaa,bbb); //321,function
}
b();

