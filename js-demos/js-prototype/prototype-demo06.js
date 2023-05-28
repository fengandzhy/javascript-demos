/**
 * 1. person.__proto__.__proto__ 是所有对象的原形对象, 是所有元素原型链的根部
 * */
function Person(){}
var person = new Person();
var obj = new Object();
var date = new Date();
console.log(Object.__proto__.__proto__=== person.__proto__.__proto__);
console.log(Object.__proto__.__proto__=== Person.__proto__.__proto__);
console.log(Object.__proto__.__proto__=== Function.__proto__.__proto__);
console.log(obj.__proto__ === person.__proto__.__proto__);
console.log(date.__proto__.__proto__ === person.__proto__.__proto__);


