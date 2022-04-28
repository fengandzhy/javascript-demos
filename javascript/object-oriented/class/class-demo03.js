/**
 * constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。注意，这里的返回一定是Object.create 的才有效果
 * */
class Foo {
    constructor() {
        return Object.create(null);
    }
}

console.log(new Foo() instanceof Foo); //false
console.log(typeof new Foo()); //object
console.log(new Foo());

