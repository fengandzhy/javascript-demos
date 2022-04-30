
/**
 * 关于instanceof
 * 当a instanoeof A 是ture的时候，本质上就是说，a.__proto__ === A.prototype
 * 或者 a.__proto__.__proto__ === A.prototype
 * */
function Person() {
}
var person = new Person();
console.log(person instanceof Person); //true
console.log(person instanceof Object); //true
console.log(Object.prototype); // {}
console.log(Object); // [Function: Object]
console.log(Object.__proto__);
console.log(Object.__proto__.__proto__);