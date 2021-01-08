

console.log(Object); // f Object(){}
console.log(Function); // f Function(){}
console.log(typeof Object); // function
console.log(typeof Function); // function


console.log(Object.__proto__); //f () {}
console.log(Function.__proto__); //f () {}

/**
 * Function 和 Object 唯一的区别就在于Function.prototype = f (){} 和 Function.__proto__一样
 * 而 Object.prototype 是一个对象 {constructor:f......}, 是所有js对象的原形对象
 * */
console.log(Function.prototype); //f (){}
console.log(Object.prototype); //{constructor:f......}
console.log(Object.__proto__ === Function.prototype); //true
console.log(Function.__proto__ === Function.prototype);//ture
console.log(Function.__proto__ === Object.__proto__ );//ture
console.log(Function.__proto__.__proto__ === Object.prototype); //true
console.log(Object.__proto__.__proto__ === Object.prototype); //true

/**
 * 因为 console.log(Object.__proto__ === Function.prototype); //true
 * console.log(Function.__proto__ === Function.prototype);//ture
 * 所以如下
 * */
console.log(Object instanceof Function); // true
console.log(Function instanceof Function); // true

/**
 * 因为 console.log(Function.__proto__.__proto__ === Object.prototype); //true
 * console.log(Object.__proto__.__proto__ === Object.prototype); //true
 * 所以如下
 * */
console.log(Function instanceof Object); // true
console.log(Object instanceof Object); // true
console.log(Object.__proto__ instanceof Object); //true
console.log(Function.__proto__ instanceof Object); //true


console.log(Object.prototype.__proto__); //null
console.log(Function.prototype.__proto__); //{constructor:f......}



/**
 * 作为一个普通函数来说
 * 1. Person.__proto__ 是 f () {} 这个跟Object 和 Function 都一样的
 * 2. Person.prototype 是一个对象是所有被 Person 创建出来的对象的原型对象
 * 3.
 * */
function Person() {
}
var person = new Person();
console.log(Person); // f Person(){}
console.log(typeof Person); // function
console.log(Person.__proto__); //f () {}
console.log(Person.prototype); //{constructor: f Person()......}
console.log(Person.__proto__ === Function.__proto__ ); //true
console.log(Person.__proto__ === Object.__proto__ ); //true

console.log(person.__proto__.__proto__); //{constructor:f......}
console.log(person.__proto__.__proto__ === Object.prototype);

console.log(typeof person); //object
console.log(typeof Function); //function
console.log(typeof person.__proto__); // object
console.log(typeof Person.__proto__); // function
console.log(typeof person.__proto__.__proto__); // object


/**
 * Object.prototype 也就是对象 {constructor:f......} 是所有对象的原型对象, 它虽然能typeof 出 object 但是它绝对 不会 instanceof 出 Object
 * 另外Javascript 中所有的对象都是基于这个对象创建出来的 也就是说所有的对象都能 instanceof Object 都返回true
 *
 * */
var a = {name:'abc',age:'15'}
console.log(a);//
console.log(a.__proto__);//{constructor:f......}

var b = {}
console.log(b);
