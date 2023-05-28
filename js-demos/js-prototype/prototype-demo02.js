/**
 * 1. 这里访问person1.name，它会从person1里面找name属性，发现没有，它就会去原型对象里面找了,
 * 原型对象里没有的话就去原型对象的原型对象里去找了. 从这点也可以看出其实person对象继承自它的原型对象
 *
 * */
function Person(){}
Person.prototype.name='May';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name);
console.log(person2.name);

