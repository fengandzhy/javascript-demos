
/**
* 这个循环是一步步去定义函数，但是var 定义出来的i 它是全局作用域的，
 * 所以当执行a[6]()的时候，会运行console.log(i); 此时要用到这个变量i,
 * 发现这里i是var定义的，所以会在函数作用域和全局作用域里去找，这里函数作用域没有这个变量，所以到全局作用域里去找i, 所以找到的是10
* */
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10

/**
 * 跟上面一样，运行console.log(i);的时候，需要找寻变量i,发现i是let声明的，当前的i只在本轮循环有效，
 * 所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。
 *
 * */
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6

/**
 * for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
 * 此时当执行console.log(i)的时候，回去先从子作用域里面找到i发现是abc，所以输出abc
 * */
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    var f1 = function(){console.log(i);};
}
f1();//abc

/**
 * let 不存在变量提升
 * */
console.log(bar); // 报错ReferenceError
let bar = 2;


/**
 * ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，
 * 从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
 * */
var tmp = 123;
if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
}

/**
 * 在这里x=y是取y的值，但是y并没有被声明(没有被var声明，没有被let声明),此时就会报错。
 * */
function bar(x = y, y = 2) {
    return [x, y];
}
bar(); // 报错

/**
 * 有一个块级作用域， let n = 10;在一个子块级作用域,
 * */
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}

/**
 * const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
 * 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
 * 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，
 * const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。
 *
 * */
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
console.log(foo.prop);

// 将 foo 指向另一个对象，就会报错
// noinspection JSAnnotator
foo = {}; // TypeError: "foo" is read-only

/**
 * var命令和function命令声明的全局变量，依旧是顶层对象(window)的属性；
 * 另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
 * */
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
console.log(window.a); // 1

let b = 1;
console.log(window.b);// undefined


a = 1;
let a = 2;