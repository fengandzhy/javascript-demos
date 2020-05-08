/**
 * bind
 * 	作用
 * 		不调用函数，但生成一个函数，并指定函数内的this
 * 	语法
 * 		函数名.bind(thisArg,arg1,arg2...)
 * 	参数
 * 		thisArg			函数里的this指向
 * 		arg1,arg2...		这些参数是调用函数时传的实参
 * 	注意
 * 		1、thisArg的值为空、null、undefined的时候this指向window
 * 		2、thisArg的值为原始值时候，this指向它们对应的包装对象
 * 		3、同样不适用于箭头函数
 * 		4、它的返回值是一个函数
 */

/**
 * 这只是生成一个新的函数
 * */
function fn(){
    console.log(this);
}

const fn1 = fn.bind([1]);
fn1();
fn.bind([1])();

var arr = [1];
var arr1 = [2];
const fn1 = arr.push.bind(arr1,3);
fn1();
console.log(arr1);