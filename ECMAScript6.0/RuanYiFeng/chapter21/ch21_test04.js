/**
 * constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
 * */
class Foo {
    constructor() {
        return Object.create(null);
    }
}

console.log(new Foo() instanceof Foo);
console.log(typeof new Foo());