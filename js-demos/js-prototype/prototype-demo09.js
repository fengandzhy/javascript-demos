
/**
 * typeof 为 function 并不一定就是函数
 * */
function Person(){}
console.log(Function); // Function对象本身
console.log(Function.__proto__); // 所有函数的原形对象, 它的constructor属性是 Function对象本身
console.log(Function.__proto__ === Function.prototype); // true
console.log(Function instanceof Function); // true
console.log(Function.__proto__.__proto__); // 所有对象的原形对象
console.log(Function.constructor === Function); // true
console.log(typeof Function.__proto__ === 'function'); // true
console.log(typeof Function.__proto__.__proto__ === 'object'); //true
console.log(typeof Function.__proto__ === 'function'); // true
console.log(Function.__proto__ instanceof Function); // false

