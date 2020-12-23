/**
 * 关于在块级作用域里定义变量和函数的提升问题.
 * 1. 关于变量提升只发生在 var 定义的变量, function 定义的函数, 以及函数的形参
 * 2. 变量提升发生在可执行代码的预解析阶段,
 *      看见var 定义的变量就在 VO 上添加一个同名变量值为undefined, 如果发现VO上已经有了同名的变量时，不去改变任何值.
 *      看见function 定义的函数就在VO上添加一个同名变量,值为function, 如果发现VO上已经有了同名的变量时,修改它的值为function
 *      看见函数形参就在VO上添加一个同名变量,值为函数调用时传入的值, 如果发现VO上已经有了同名的变量时,看看其值，如果不是function 就改变它的值为传入的值
 *      事实上,函数的形参它只会出现在函数作用域上,而对于函数的作用域来说,只有调用函数的时候才会进入预解析阶段.那么对于函数的形参来讲,当这段代码(位于函数中的),
 *      进入预解析阶段就已经在VO上将它的值变成了传入的值
 * 3. 块级作用域的出现是为了方便那些由const和let定义的变量
 * 4. 当var 定义的变量出现在块级作用域时, 它会忽视块级作用域的存在,变量提升的规则不变
 * 5. 当function 定义的函数出现在块级作用域时, 在块内部，它作为一个函数会提升到块级作用域顶端, 在块的外部，作为一个var 定义的变量函数 提升到外面
 * 6. 因为函数形参不会出现在块级作用域,它只会出现在函数作用域,故不作讨论
 * */



/**
 * var 定义的变量在变量提升时会忽视块级作用域的存在,它提升在了全局作用域里面
 * 也就是说 对于一个块来说,如果没有声明函数, 里面变量随便怎么定义, 按照原来的规则提升
 * */
console.log(a);//undefined
{
    console.log();
    var a = 0;
}

/**
 * var a = 20; 这里的a变量提升不受块级作用域影响,提升到了函数作用域顶端因此是undefined
 * */
var a = 10;
function fn(){
    console.log(a);//undefined
    if(false){
        var a = 20;
    }
}
fn();

/**
 * 对于有函数声明的块级作用域来说
 * 对于块的外部相当于 var a = function(){} 所以变量提升,打印出undefined
 * 对于块里面相当于 function a(){} 提升到了作用域顶端,打印出function
 * 另外块级作用域里的函数声明,只有执行到函数声明语句时,才会去改变作用域里的变量
 * */
console.log(a); //undefined
{
    console.log(a); //funciton
    function a(){
        console.log('abc');
    }
}
console.log(a); //function


function fn1(){
    console.log(a); //undefined
    {
        console.log(a); //funciton
        function a(){
            console.log('abc');
        }
    }
    console.log(a); //function
}
fn1();

/**
 * 当执行到 function a(){} 才会去改变作用域链上的值.
 * 正常情况下(没有这个块的话)执行到a=10; 会去查找作用域链并改变作用域链上的值,但是此刻在块级作用域中有了函数声明,这样的话只有执行到function a(){} 才会去改变作用域上的值
 * 也可以说a =10 在执行到function a(){} 方能体现出来
 *
 *
 * 上面是几个月前写的了, 在没有这个块的话, 当程序执行到a=10的时候,它会去全局作用域的VO上去找a, 然后将其值改为10
 * 但是现在有了这个块, 而且这个块里面还定义了一个函数, 那么在预解析阶段, 对于块外就相当于该 var a = function();
 * 这也就是为什么第一个console.log(window.a,a); 会输出undefined, undefined
 * 在块里面在function a(){}就部分相当于于let a 所以在前在后都不能在 重新定义a(var a 就是错误的)
 * 另外在块里面 运行到 function a(){}之前 它作为一个函数会提升到块级作用域顶端 这也就是为什么第二个console.log(window.a,a); 会输出30, f a()
 * 运行到function a(){} 它才会去更改全局的作用域.
 *
 * 就是说没有这个块{} 的话,本来是预解析阶段就会把全局作用域中的a 变成function, 但是有了个块，它拖后了这个进程, 要执行到块里面的function a(){}
 * 它才会去更改原本要改变的全局作用域
 * 那么同理 在function a(){} 之前加上a=10; 如果没有这个块，在运行到a=10;的时候就会去改变全局作用域,而现在有了这个块,所以只有运行到
 * function a(){} 的时候才会体现出这种更改的效果, 但是运行到a=10; 它会改变块作用域里的a
 * 同理在function a(){} 之后运行a = 20; 就没有效果了。因为程序不会再次运行到function a(){} 体现不出a = 20; 更改全局作用域的效果
 * 除非在a = 20; 之后再来一个function a(){} 才能体现出更改全局作用域的效果
 *
 * 以下这段代码只能在窗口运行,不能在这里直接运行. 因为这里是运行是node环境没有window这个变量
 *
 * */
console.log(window.a,a); //undefined, undefined
var a = 30;
{
    console.log(window.a,a); // 30, f a()
    a=10;
    console.log(window.a,a);// 30, 10
    function a(){}
    //let a = 2;
    console.log(window.a,a); //10 ,10
    a = 20;
    //function a(){}
}
console.log(window.a,a);//10,10

/**
 * 下面这个例子更好的诠释了定义在块中的函数变量提升是怎样的,
 * 在预解析阶段
 * 1. 在运行到块的外面function a(){} 相当于 var a = function(){}; 所以第一个 undefined, undefined
 * 2. 在包运行到里面时, function a(){} 只会改变包里面的 a 而不会去改变全局作用域上的 a
 * 在函数的运行阶段
 *  只有运行到 function a(){} 会去改变全局的 a 也就是上面提到的变量延迟体现
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
 * 如果它执行不到function a(){} 由此可见把外面全局作用域里的a变成 f 是在运行阶段进行的而不是预解析阶段
 * 定义在块里的函数只有在运行阶段运行到这个函数的定义之处时，才会去改变相应的作用域链上的变量
 * */
console.log(window.a,a); //undefined, undefined
var a = 30;
if(false)
{
    console.log(window.a,a);// 30, f
    function a(){}
    console.log(window.a,a); //f ,f
}
console.log(window.a,a);//f,f

/**
 * 第一个foo()报错，一个道理, 对于块的外部 那两个函数定义均相当于 var foo = function(){....}
 * 第二个foo()不报错，还是因为在块中声明的函数,只有执行到函数声明语句才会去改变作用域内的值
 * */
foo();
if(true){
    console.log(foo);
    function foo(){
        console.log('1111');
    }
}else{
    console.log(foo);
    function foo(){
        console.log('22222');
    }
}
foo();

/**
 * 特别要注意的是,对于块中声明的函数,其声明语句的下方不能继续声明同样的变量
 * 例如,在块中function a(){}不能在下方 继续 var a 因为 function a(){} 相当于let
 * */
var a =20;
if(true){
    console.log(window.a,a); // 20,function 因为执行到function a 在这里只提升到了块的顶端
    a = 10
    console.log(window.a,a); // 20, 10 a=10 改变了块里的a 没有改变到全局作用域里的a, 因为此时块里有一个同名的函数声明
    function a(){};
    console.log(window.a,a); // 10, 10 执行到function a(){};改变了全局作用域中的变量a的值,也就是说a=10;对于全局作用域中变量的修改在这步体现了出来
    a = 30;
    console.log(window.a,a); // 10, 30 由于function a(){};的存在这里的a = 30; 已经不可能去影响到全局作用域里的值,因为function a(){}; 的存在相当于let a =...的作用
}
console.log(window.a,a); // 10, 10 因为两个是同一个

var a =20;
if(true) {
    var a = 30;
    var a = 40;
}
console.log(window.a,a); // 10, 10 因为两个是同一个

/**
 *
 * 如果这个块中有声明函数并且外层函数作用域的这么来考虑变量提升的规则
 * 1. 如果函数作用域没有参数则变量提升规则不变
 * 2. 如果函数作用域有参数且参数名跟块中的声明函数的名称不一致, 提升规则也不变
 * 3. 如果函数作用域有参数且参数名跟块中的声明函数的名称一致, 块中声明函数的这个变量不提升到父作用域中
 *
 *
 *
 * */
function b() {
    var aaa = 329;
    console.log(aaa,bbb); //329,undefined
    {
        console.log(aaa,bbb); //329,function
        function bbb() {
        }
        console.log(aaa,bbb); //329,function
        aaa = 321;
    }
    console.log(aaa,bbb); //321,function
}
b();

/**
 * 函数作用域里已经有了 bbb 但这个bbb 不是参数传进来的, 仍然按照原有规则提升
 * */
function b() {
    console.log(aaa,bbb); //undefined undefined 因为function bbb() {} 定义在块里面 对于块外面的就相当于 var bbb = function(){};
    var aaa = 329;
    var bbb = 455;
    console.log(aaa,bbb); //329,455
    {
        console.log(aaa,bbb); //329,function
        function bbb() {}
        console.log(aaa,bbb); //329,function
        aaa = 321;
    }
    console.log(aaa,bbb); //321,function
}
b();


function b(aaa) {
    var aaa = 329;
    console.log(aaa,bbb); //329,undefined
    {
        console.log(aaa,bbb); //329,function
        function bbb() {
        }
        console.log(aaa,bbb); //329,function
        aaa = 321;
    }
    console.log(aaa,bbb); //321,function
}
b(123);

function b(aaa,bbb) {
    var aaa = 329;
    console.log(aaa,bbb); //329,469
    {
        console.log(aaa,bbb); //329,function
        function bbb() {
        }
        console.log(aaa,bbb); //329,function
        aaa = 321;
    }
    console.log(aaa,bbb); //321,469
}
b(123,469);


function b(aaa,bbb) {
    var aaa = 329;
    console.log(aaa,bbb); //329,469
    //{
        console.log(aaa,bbb); //329,function
        function bbb() {
        }
        console.log(aaa,bbb); //329,function
        aaa = 321;
    //}
    console.log(aaa,bbb); //321,469
}
b(123,469);

function c(aaa) {
    function b() {
        var aaa = 329;
        {
            console.log(aaa);//function
            aaa = 325;
            console.log(aaa);//325

            function aaa() {
            }

            aaa = 323;
            console.log(aaa); //323
        }
        console.log(aaa);//325
    }
    b();
}
c(123)





/**
 *
 * */
function a() {
    var aaa = 123;
    function b(aaa){
        console.log(aaa);
        var aaa = 329;
        {
            aaa = 325;
            function aaa (){}
            aaa = 234;
        }
        console.log(aaa);
    };
    b(222);
    console.log(aaa);//123
};
a();

console.log(a); //undefined

function x() {
    console.log(a);
    var a = 20;
    {
        console.log(a);
        a = 12;

        function a() {
        }

        console.log(a);
        a = 22;
        console.log(a);
    }
    console.log(a);
};
x();

