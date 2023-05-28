/**
 * 1. 关于原型对象的原型对象
 * person.__proto__.__proto__发现它的constructor属性是ƒ Object(),
 * 说明person.__proto__是Object创建出来的对象.
 *
 * 2. 在node里面运行console.log(person.__proto__.__proto__); 它输出是{}, 而console.log(new Object()); 也输出{}
 * 但是这二者绝对不是一回事, person.__proto__.__proto__ 的{} 它没有.__proto__ 而 new Object() 而它有.__proto__
 * 在浏览器控制台运行显示这二者就能看出差别来 也就是说person.__proto__.__proto__ 并不是通过new Object() 创建出来的
 * person.__proto__.__proto__ 是所有对象的原形对象
 *
 * */
function Person() {
}
var person = new Person();
console.log(person);//Person {}
console.log(person.__proto__);//{constructor: ƒ}
console.log(person.__proto__.__proto__); //{}
console.log(person.__proto__.__proto__.__proto__); //null
console.log(person.__proto__.__proto__===Object.prototype);//true
console.log(new Object());
person.__proto__ = new Object();
console.log(person);
// console.log(Function.__proto__.__proto__);


console.log(Object);//ƒ Object()
console.log(Object.prototype); //{} 被new Object()出来的对象都是{}
console.log(Function);//ƒ Function()
console.log(Function.prototype);//ƒ ()
console.log(Object.__proto__);//ƒ ()
console.log(Function.__proto__);//ƒ ()