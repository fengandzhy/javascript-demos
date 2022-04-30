/**
 * 1. 关于原形对象, person的原型对象的意思就是说,person对象是根据这个原型对象创建出来的,也就是说这个原型对象是创建person对象的模板
 *
 * 2. 如何得到原形对象
 *  1) person 的 __proto__属性就是这个对象的原型对象, person.person.__proto__
 *  2) Person.prototype 也是person对象的原型对象, Person.prototype
 *  3) Object.getPrototypeOf(person)
 *
 * 3. 只有函数对象才有prototype属性
 *
 *
 *
 * */
function Person(){}
var person = new Person();
console.log(person);
console.log(person.__proto__);
console.log(Person.prototype);
console.log(Person.prototype === person.__proto__);
console.log(Object.getPrototypeOf(person) === Person.prototype);
console.log(Person);

