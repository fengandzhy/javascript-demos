/**
 * 这里具体分析一个下函数的执行过程
 * */


/**
 * 以下函数执行过程如下
 * 1.checkscope 函数被创建，保存作用域链到 内部属性[[scope]],这是函数声明的时候执行的
 * checkscope.[[scope]] = [ globalContext.VO];
 *
 * 2.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈
 * ECStack = [checkscopeContext,globalContext];
 *
 * 3.checkscope 函数并不立刻执行，开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链
 * checkscopeContext = {
    Scope: checkscope.[[scope]],
    }
 *
 * 4.第二步：用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明
 * checkscopeContext = {
    AO: {
        arguments: {
            length: 0
            },
        scope2: undefined
     },
    Scope: [AO, [[Scope]]]
   }
 *
 * 5.第三步：将活动对象压入 checkscope 作用域链顶端
 * checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    },
    Scope: [AO, [[Scope]]]
    }
 *
 * 6.准备工作做完，开始执行函数，随着函数的执行，修改 AO 的属性值
 * checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: 'local scope'
    },
    Scope: [AO, [[Scope]]]
    }
 *
 *
 * 7.查找到 scope2 的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出
 *
 *
 *
 * */
var scope = "global scope";
function checkscope(){
    var scope2 = 'local scope';
    return scope2;
}
checkscope();

/**
 * 当 foo 函数的执行上下文初始化的时候，才会创建 bar 函数.
 * 当这个bar函数被创建时 bar 的 [[scope]] 属性值就是 [ fooContext.AO, globalContext.VO];
 *
 * */
function foo() {
    function bar() {
        console.log('abc');
    }
}

/**
 * console.dir(foo); 可以查看foo的作用域链
 * 此时在bar里面没有引用其父作用域里的任何变量，所以导致[[scope]]属性并没有加上函数foo的作用域链，所以console.dir(bar);看不到foo的作用域链
 *
 * */
function foo(){
    function bar(){
        return 111;
    }
    bar();
    console.dir(bar);
    return 222;
}
foo();
console.dir(foo);

/**
 * 此例，在bar中引用了foo函数上下文AO中的变量a,所以console.dir(bar);看到其scope数组里面的长度是2
 * */
function foo(){
    var a = 1;
    function bar(){
        console.log('a', a);
        return 111;
    }
    bar();
    console.log(bar);
    console.dir(bar);
    return 222;
}
foo();
console.dir(foo);








