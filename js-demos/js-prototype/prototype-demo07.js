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
 * */
function Person(){}
console.log(Object); //ƒ Object()
console.log(Object.__proto__); //ƒ Object()
console.log(Object.prototype); //ƒ Object()
console.log(typeof Object);//function
console.log(Object.__proto__ === Function.prototype); //true
console.log(Object instanceof Function);//true
console.log(Person instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Function.__proto__ === Object.__proto__); //true
console.log(Object instanceof Object);//true
console.log(Function instanceof Object);//true
console.log(Person.__proto__ === Function.prototype);//true
console.log(Function); //ƒ Function()
console.log(typeof Function);//function
console.log(Person);//ƒ Person()
console.log(typeof Person);//function
console.log(Function.__proto__ === Person.__proto__);//true
console.log(Person.constructor);
