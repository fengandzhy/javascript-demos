/**
 * 对象的解构赋值
 * */

/**数组根据顺序解构赋值，变量根据名称解构赋值*/
let { foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo); // "aaa"
console.log(bar);// bbb

let { baz } = { foo: "aaa", bar: "bbb" };
console.log(baz);// undefined

let { foo } = { foo: "aaa", bar: "bbb" };
console.log(foo);//aaa

/**
 * foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo,
 * 变量名与属性名不一致，必须写成下面这样,也就是说对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
 * */
let { foo: baz } = { foo: "aaa", bar: "bbb" };
console.log(baz); // "aaa"
console.log(foo);//error

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
console.log(f); // hello
console.log(l);// world


let obj = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};

let { p: [x, { y }] } = obj;
console.log(x); // hello
console.log(y);// world

/**因为obj里面有一个属性名称是p,刚好和左边的变量名称相对应，所以p就是["Hello", {y: "World"}]*/
let obj = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
let { p, p: [x, { y }] } = obj;
console.log(x); // hello
console.log(y);// world
console.log(p); // ["Hello", {y: "World"}]


/**
 * 以下例子就是一个模式 loc: { start } start是变量，loc是模式，
 * 就是说，有一个变量start要取loc里面的那个start值，怎么取？弄一个模式出来告诉es6,
 * 同理，有一个变量line要取里面的那个line的值，同样要弄出来一个模式。左右两边变量名必须相等，例如左边弄一个
 * line1是不可以的
 * */
const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
let { loc, loc: { start }, loc: { start: { line}} } = node;
console.log(loc);//Object {start: Object}
console.log(start);//Object {line: 1, column: 5}
console.log(line);//1



let obj = {};
let arr = [];
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
console.log(obj);

/**prop 在这里是不需要定义的，是一个变量对象自带的*/
let obj = {};
console.log(obj.prop);

/**默认值生效*/
var {x: y = 3} = {};
console.log(y);//3

/**默认值无效 默认值生效的条件是，对象的属性值严格等于undefined*/
var {x: y = 3} = {x: 5};
console.log(y);//5

var {x = 3} = {x: null};
console.log(x);//null

/**解构不成功，undefined*/
let {foo: bar} = {baz: 'baz'};
console.log(bar);//undefined

/**报错，因为foo这时等于undefined，再取子属性就会报错*/
let {foo: {bar}} = {baz: 'baz'};
console.log({bar});

/**只要_tmp不为空，_tmp.foo没有被赋值就是undefined*/
let _tmp = {baz: 'baz'};
console.log(_tmp);
console.log(_tmp.foo);//undefined

/**必须加()否则会被js 认为是一个块*/
let x;
({x} = {x: 1});
console.log(x);


let { log, sin, cos } = Math;
console.log(log);
console.log(sin);
console.log(cos);

let obj = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
let { p: [x, { y }] } = obj;
console.log(x); // "Hello"
console.log(y);// "World"


let obj = {
    p:{

    }
};