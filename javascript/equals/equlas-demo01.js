/**
 * 1.在js中相等的只能值字面量, 两个object的东西永远不会相等. 返回会是false
 * 例如 d和e 这连个就是object var d = new String('abc');  var e = new String('abc')
 * 所以 console.log(d==e); 是false
 * 另外 c 就是字面量 var c = 'abc' 当执行console.log(typeof c );返回为string
 * 当一方有字面量的情况下 这种表达式的返回console.log(c==d); 才有可能是true
 *
 *
 * */

var c = 'abc';
var d = new String('abc');
var e = new String('abc')
console.log(c==d); //true
console.log(d==e); //false

/**
 * === 不仅是要判断值是否相等还要看类型是否匹配, obj与str 它们的类型不匹配所以返回就是false
 * */
var obj = new String('0');
var str = '0';
console.log(obj === str); // false
console.log(obj == str); //true