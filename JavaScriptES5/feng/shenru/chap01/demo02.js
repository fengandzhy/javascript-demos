/**
 * 每一个对象都会有一个__proto__属性，这个属性也会指向该对象的原型对象
 * */

function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(person) === Person.prototype)