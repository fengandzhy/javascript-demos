

var a = [5,1];
var b = new Array(5,1);
console.log(a==b);
console.log(typeof a);
console.log(typeof b);

var c = 'abc';
var d = new String('abc');
console.log(c==d);

var obj = new String('0');
var str = '0';
console.log(obj === str); // false
console.log(typeof obj);
console.log(typeof str);
