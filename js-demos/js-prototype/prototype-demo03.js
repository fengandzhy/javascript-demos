/**
 * 1. person.__proto__是person的原型对象，person.__proto__.constructor是指向的创建person对象的构造器就是那个function Person(){}
 * 但是如果运行person.constructor发现person里面没有constructor属性，于是就去person的原型对象里面去找constructor属性,这也就是以下两个为ture的原因
 *
 *
 * */
function Person(){}
var person = new Person();
console.log(Person.prototype.constructor);
console.log(Person === Person.prototype.constructor);//true
console.log(person.constructor === Person.prototype.constructor);//true
console.log(person.constructor === person.__proto__.constructor);//true