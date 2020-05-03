/**
 * 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行
 */
class Foo {
    constructor() {
        return Object.create(null);
    }
}

Foo()//报错

function Foo(){

}
var foo = new Foo(); //不报错