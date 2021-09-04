
/**
 * 1. 定义数组的方法
 * */
var a = [5,1,'abc'];
var b = new Array(5,1,'abc');
console.log(a==b);
console.log(a);
console.log(b);

var c = 'abc';
var d = new String('abc');
console.log(c==d);

var obj = new String('0');
var str = '0';
console.log(obj === str); // false
console.log(typeof obj);
console.log(typeof str);
