

/**
 * typeof 是js中判断数据格式的一种方法,大致有如下六种
 * string
 * number
 * object
 * function
 * boolean
 * undefined
 *
 * */
console.log(typeof 'a');
console.log(typeof 3);
console.log(typeof({}));
console.log(typeof(function (){}));
console.log(typeof(true));
console.log(typeof(undefined));

console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object     []数组的数据类型在 typeof 中被解释为 object
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object     null 的数据类型被 typeof 解释为 object

/**
 * js 中只有字面量才能相等==, 任何对象都是不可能相等.
 * true == 1
 * false == 0
 *
 * function 的 length 就是它的参数长度.
 * 形参: 形式上的参数.
 * 实参: 实际的参数.
 *
 * */
let a = [5,1,'abc'];
let b = new Array(5,1,'abc');
console.log(a==b); // false

let c = 'abc';
let d = new String('abc');
let e = new String('abc')
console.log(c==d); //true 字面量可以相等
console.log(d==e); //false

let obj = new String('0');
let str = '0';
console.log(obj === str); // false
console.log(typeof obj); // object
console.log(typeof str); // str

let f = new Number(1);
let g = new Number(1);
console.log(f == g );// false

console.log(false == 0); //true
console.log(true == 1); //true
console.log(true == 2); //false

if(0){
    console.log('aaaa'); // 不执行
}

if(1){
    console.log('bbbb'); // 执行
}

if(2){
    console.log('cccc'); //执行
}

function show(a,b){}
console.log(show.length); //2

console.log(undefined == null); // true
console.log(undefined === null); // false

