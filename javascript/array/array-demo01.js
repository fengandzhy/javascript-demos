
/**
 * 1. 定义数组的方法
 *
 * 2. 在js中相等的只能值字面量, 两个object的东西永远不会相等. 返回会是false
 * 例如 d和e 这连个就是object var d = new String('abc');  var e = new String('abc')
 * 所以 console.log(d==e); 是false
 * 另外 c 就是字面量 var c = 'abc' 当执行console.log(typeof c );返回为string
 * 当一方有字面量的情况下 这种表达式的返回console.log(c==d); 才有可能是true
 *
 * 对于数组来说 var a = [5,1,'abc']; var b = new Array(5,1,'abc'); 他们都是object 所以 console.log(a==b); 返回为false
 * 这个是js 的内部机制造成的
 *
 *
 * */
var a = [5,1,'abc'];
var b = new Array(5,1,'abc');
console.log(a==b); // false

var c = 'abc';
var d = new String('abc');
var e = new String('abc')
console.log(c==d); //true
console.log(d==e); //false

var obj = new String('0');
var str = '0';
console.log(obj === str); // false
console.log(typeof obj);
console.log(typeof str);


