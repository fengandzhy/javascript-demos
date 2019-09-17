
/**
 * constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
 * 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
 * */
class Point {
}
// 等同于
class Point {
    constructor() {}
}

/**
 * constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
 * */
class Foo {
    constructor() {
        return Object.create(null);
    }
}

new Foo() instanceof Foo;
typeof new Foo();


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



/**
 * 实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
 * 另外constructor的参数就是类在new时的参数
 *
 * */
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //这里的toString方法是在那个原型上的
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

var point = new Point(2, 3);

console.log(point.toString()); // (2, 3)

console.log(point.hasOwnProperty('x')); // true
console.log(point.hasOwnProperty('y')); // true
console.log(point.hasOwnProperty('toString')); // false
console.log(point.__proto__.hasOwnProperty('toString')); // true

var p1 = new Point(2,3);
var p2 = new Point(3,2);
p1.__proto__.printName = function (){ return 'opps';}
p1.printName(); // "Oops"
p2.printName(); // "Oops"


class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //这里的toString方法是在那个原型上的
    toString() {
        console.log('abcd');
        console.log(this)
    }

    //如果写成这样,这里的this指向的是undefined,es6默认使用严格模式
    toString1(){
        function abc(){
            //this.toString();
            console.log(this);
        }
        abc.bind(this)();
    }

}

var point = new Point(2, 3);
point.toString1();
/**
 * 与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
 * */

// class MyClass {
//     constructor() {
//         // ...
//     }
//     get prop() {
//         return 'getter';
//     }
//     set prop(a) {
//         console.log('setter: ');
//     }
// }

let inst = new MyClass();
console.log(inst);

inst.prop = 123;
// setter: 123

console.log(inst.prop);
// 'getter

class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element.innerHTML;
    }

    set html(value) {
        this.element.innerHTML = value;
    }
}

var descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, "html"
);

console.log(descriptor);
console.log(new CustomHTMLElement('abc'));




/**
 * 与函数一样，类也可以使用表达式的形式定义。
 * 需要注意的是，这个类的名字是Me，但是Me只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用MyClass引用。
 * */
const MyClass = class Me {
    getClassName() {
        return Me.name; //返回的是函数本身的name
    }
};

let a = new MyClass();
console.log(a);
console.log(a.getClassName());
console.log(MyClass.name);

/**
 * 立即执行class
 * */
let person = new class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}('张三');

person.sayName(); // "张三"


/**
 * 不存在变量提升(hoist)
 * */
new Foo(); // ReferenceError
class Foo {}

//这个不会报错
new Foo(); // ReferenceError
function Foo() {}


/**
 * 类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错
 * */
class Logger {
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
const {printName}  = logger; //将logger里面的printName提取出来
console.log(printName);
printName();


/**
 * 用bind绑定就可以了
 * */
class Logger {
    constructor() {
        this.printName = this.printName.bind(this);
    }

    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}
const logger = new Logger();
const {printName}  = logger; //将logger里面的printName提取出来
printName();


/**
 * 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
 * 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
 * */
class Foo {
    static classMethod() {
        return 'hello';
    }
}
Foo.classMethod() // 'hello'
var foo = new Foo();
foo.classMethod(); //error


/**
 * 如果静态方法包含this关键字，这个this指的是类，而不是实例。
 * */
class Foo {
    static bar() {
        this.baz();
    }
    static baz() {
        console.log('hello');
    }
    baz() {
        console.log('world');
    }
}

Foo.bar();

/**
 * 父类的静态方法，可以被子类继承。
 * */
class Foo {
    static classMethod() {
        return 'hello';
    }
}

class Bar extends Foo {
}

Bar.classMethod();

/**
 * 静态方法也是可以从super对象上调用的。
 * */
class Foo {
    static classMethod() {
        return 'hello';
    }
}

class Bar extends Foo {
    static classMethod() {
        return super.classMethod() + ', too';
    }
}

Bar.classMethod();

















