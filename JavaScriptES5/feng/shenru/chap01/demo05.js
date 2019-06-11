

function Person() {
}
var person = new Person();
console.log(person instanceof Person);
console.log(person.__proto__ === Person.prototype);


function Person() {
}
var person = new Person();
console.log(person instanceof Person);
console.log(person.__proto__ === Person.prototype);
console.log(Person.prototype instanceof  Object);
console.log(Person.prototype.__proto__===Object.prototype);//原型对象的原型其实是Object对象(被Object()new出来的对象)的原型
console.log(Person.__proto__=== Object.__proto__ );//true
console.log(Person.prototype.__proto__.__proto__);//Object对象的原型对象的原型对象就是null啦，它已经到顶了.
console.log(Person.__proto__=== Function );//false
console.log(Person.__proto__=== Function.prototype );
console.log(Person instanceof Function );
console.log(Function instanceof Function );
console.log(Function.__proto__ === Function.prototype );


function Aoo(){}
function Foo(){}
var foo = new Foo();
console.log(foo);
console.log(foo instanceof Foo)//true
console.log(foo instanceof Aoo)//false


