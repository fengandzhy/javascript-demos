/**
 * 原型对象中的constructor属性指向对象的构造函数
 * */
function Person() {

}
var person = new Person();
console.log(person.__proto__.constructor);
//对于构造函数来说，它本身也是一个对象
console.log(Person);
console.log(person.__proto__.constructor==Person);//true

/**对于一个函数类型的对象(Person)，它的构造函数是
 *
 * ƒ Function() { [native code] }
 * */
console.log(Person.__proto__.constructor);

