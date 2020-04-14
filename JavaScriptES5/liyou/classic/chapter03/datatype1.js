var a = 'abc';
var b = 'abc';
var c = new String('abc')

var d = [1,2,3]; //跟字符串不一样，var d = [1,2,3];相当于var d = new Array(1,2,3);
var e = [1,2,3];
var f = new Array(1,2,3);

console.log(a == b); //true
console.log(a === b); //true
console.log(a == c); //true
console.log(a === c); //false

console.log(typeof(c));//object
var g = new String('abc');
console.log(c == g); //false 任何对象都是不相等的，只有字面量(literal)才会相等


console.log(d == e); //false 
console.log(d === e); //false
console.log(e == f); //false


/**
 * a(c); 传入的是一个复制的一个地址，然后b.push(4)操作的是同一个地址
 * 
 * @type {Array}
 */
var c = [1,2,3];
function a(b){
	b.push(4);
}
a(c);
console.log(c); //1,2,3,4


/**
 * a(c); 传入的是一个复制的一个地址，然后b = [5,6,7];相当于重新指定了一个地址
 * @type {Array}
 */
var c = [1,2,3];
function a(b){
	b = [5,6,7];
}
a(c);
console.log(c);



var a = new Number();//此时的a不是一个字面量而是一个对象


console.log(true == 1);
console.log(false == 0);


/**
 * show.length是参数的长度
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @param  {[type]} c [description]
 * @return {[type]}   [description]
 */
function show(a,b,c){

}
console.log(show.length);


var a; 
console.log(typeof a );
console.log(undefined == null); //true
console.log(undefined === null); //false 因为它们数据类型不相等

