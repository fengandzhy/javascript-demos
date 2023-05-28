
/**
 * 1. 关于instanceof
 * 当a instanoeof A 是ture的时候，本质上就是说，a.__proto__ === A.prototype
 * 或者 a.__proto__.__proto__ === A.prototype
 * */
function Person() {
}
var person = new Person();
console.log(person instanceof Person); //true
console.log(person instanceof Object); //true
console.log(Object instanceof Function);//true
console.log(Person instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Person instanceof Object);//true