
/**
 * 这里探讨原型和原型链
 * */

/**
 * person 的 __proto__属性就是这个对象的原型对象,
 * Person.prototype 也是person对象的原型对象
 * 或者也可以通过Object.getPrototypeOf(person)
 * */
function Person(){
}
var person = new Person();
console.log(person.__proto__);
console.log(Person.prototype);
console.log(Person.prototype ===person.__proto__); //true
console.log(Object.getPrototypeOf(person) === Person.prototype)//true




/**
 * 这里访问person1.name，它会从person1里面找name属性，发现没有，它就会去原型对象里面找了,
 * 原型对象里没有的话就去原型对象的原型对象里去找了
 * */
function Person(){
}
Person.prototype.name = 'May';
console.log(person);
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // May
console.log(person2.name) // May


