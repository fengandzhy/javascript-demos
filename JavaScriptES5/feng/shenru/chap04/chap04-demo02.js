/**
 * 关于在块级作用域里定义变量和函数的提升问题.
 * 1. 关于变量提升只发生在 var 定义的变量, function 定义的函数, 以及函数的形参
 * 2. 变量提升发生在可执行代码的预解析阶段,
 *      看见var 定义的变量就在 VO 上添加一个同名变量值为undefined, 如果发现VO上已经有了同名的变量时，不去改变任何值.
 *      看见function 定义的函数就在VO上添加一个同名变量,值为function, 如果发现VO上已经有了同名的变量时,修改它的值为function
 *      看见函数形参就在VO上添加一个同名变量,值为函数调用时传入的值, 如果发现VO上已经有了同名的变量时,看看其值，如果不是function 就改变它的值为传入的值
 * 3. 块级作用域的出现是为了方便那些由const和let定义的变量
 * 4. 当var 定义的变量出现在块级作用域时, 它会忽视块级作用域的存在,变量提升的规则不变
 * 5. 当function 定义的函数出现在块级作用域时, 在块内部，它作为一个顶一顶额函数会提升到块级作用域顶端, 在块的外部，作为一个var 定义的变量函数 提升到外面
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
 * 正常情况下执行到a=10; 会去查找作用域链并改变作用域链上的值,但是此刻在块级作用域中有了函数声明,这样的话只有执行到function a(){} 才会去改变作用域上的值
 * 也可以说a =10 在执行到function a(){} 方能体现出来
 * */
console.log(window.a,a);
var a = 30;
{
    console.log(window.a,a);
    a=10;
    console.log(window.a,a);
    function a(){}
    console.log(window.a,a);
    a = 20;
}
console.log(window.a,a);

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


/**
 *
 * 如果这个块中有声明函数并且外层函数作用域的这么来考虑变量提升的规则
 * 1. 如果函数作用域没有参数则变量提升规则不变
 * 2. 如果函数作用域有参数且参数名跟块中的声明函数的名称不一致, 提升规则也不变
 * 3. 如果函数作用域有参数且参数名跟块中的声明函数的名称一致, 块中声明函数的这个变量不提升到父作用域中
 *
 *
 * */
function b() {
    var aaa = 329;
    console.log(aaa,bbb); //329,function
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

function b(aaa) {
    var aaa = 329;
    console.log(aaa,bbb); //329,function
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

function c(aaa) {
    function b() {
        var aaa = 329;
        {
            console.log(aaa);
            aaa = 325;
            console.log(aaa);

            function aaa() {
            }

            aaa = 323;
            console.log(aaa);
        }
        console.log(aaa);
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

