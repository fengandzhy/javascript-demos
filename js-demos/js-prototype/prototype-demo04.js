
/**
 * 1. 关于instanceof
 * 当a instanoeof A 是ture的时候，本质上就是说，a.__proto__ === A.prototype
 * 或者 a.__proto__.__proto__ === A.prototype
 *
 * a 是 A 创造出来的,或者 a 的原形对象是 A 创造出来的.
 * person instanceof Object 是因为 person的原形对象是 Object 创造出来的
 *
 *
 * */
function Person() {
}
var person = new Person();
console.log(person instanceof Person); //true
console.log(person instanceof Object); //true


console.log(Object instanceof Function);//true
console.log(Person instanceof Function);//true
console.log(Function instanceof Function); //true

console.log(Function instanceof Object);//true
console.log(Person instanceof Object);//true
console.log(Object instanceof Object); // true


console.log(2 instanceof Number);                    // false 字面量在这里不会是true
console.log(true instanceof Boolean);                // false
console.log('str' instanceof String);                // false
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true

console.log(new Number(2) instanceof Number); // true
console.log(new Boolean(true) instanceof Boolean); // true
console.log(new String('str') instanceof String); // true