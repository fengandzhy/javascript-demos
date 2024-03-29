/**
 * 1.Object.prototype 是一切对象有一个总得原型对象 Function instanceof Object 是 true
 * Object 本身就是一个函数, 所以Object instanceof Function 也是true
 *
 * 2.关于Function的原型对象,Function是一个特殊的对象，在Function中 Function.__proto__ === Function.prototype
 * 对于Function 来讲， 它一个内置对象，是运行前就已经存在的东西.
 *
 * 3. Object, Function,Person 他们都是function只是名字不同而已. 所以它们有一个共同的原形对象 这个就是 Function.__proto__
 * 不同的是 Object.prototype 是所有对象额原形对象, 而Function.prototype 就是 Function.__proto__ 本身
 * 而Person.prototype 是person的原形对象
 *
 * 4 Object 负责创建一切对象 所以一切对象的原形对象都是 Object.prototype,
 * Function 负责创建一切函数对象, 所以一切函数对象的原形对象都是 Function.prototype
 *
 *
 * */
function Person(){}
var person = new Person();
console.log(person);
console.log(person.__proto__);
console.log(person.__proto__.__proto__);
console.log(person.constructor); // 它会去找person.__proto__.constructor
console.log(person.__proto__.constructor);
console.log(person.__proto__.__proto__.constructor);

// console.log(Person);
// console.log(Person instanceof Function);
// console.log(Person instanceof Object);
// console.log(Person.__proto__ === Function.prototype);
// console.log(Person.__proto__.__proto__ === Object.prototype);
// console.log(Person.constructor === Function);
// console.log(Person.__proto__.constructor === Object);
// console.log(Function.constructor === Function);
// console.log(Function.__proto__.__proto__.constructor === Object);
// console.log(Object); //ƒ Object()
// console.log(Object.__proto__); //ƒ Object()
// console.log(Object.prototype); //ƒ Object()
// console.log(typeof Object);//function
// console.log(Object.__proto__ === Function.prototype); //true
// console.log(Object instanceof Function);//true
// console.log(Person instanceof Function);//true
// console.log(Function instanceof Object);//true
// console.log(Function.__proto__ === Object.__proto__); //true
// console.log(Object instanceof Object);//true
// console.log(Function instanceof Object);//true
// console.log(Person.__proto__ === Function.prototype);//true
// console.log(Function); //ƒ Function()
// console.log(typeof Function);//function
// console.log(Person);//ƒ Person()
// console.log(typeof Person);//function
// console.log(Function.__proto__ === Person.__proto__);//true
// console.log(Person.constructor);
// console.log(Person.constructor === Function.constructor); // true
// console.log(Function === Function.constructor); //true
// console.log(Object.constructor === Function.constructor); //true
// console.log(person.constructor === Person); //true
// console.log(Function.__proto__ ===  Object.prototype); //true


