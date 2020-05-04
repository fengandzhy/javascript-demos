
/**
 * class 好像是专门用来创建对象的, 但是定义了class之后不能继续定义同名的function
 * */
class Point{

}
typeof Point
console.log(Point === Point.prototype.constructor);//true

function Point(){

}
console.log(Point === Point.prototype.constructor);//true

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

    fn1(){

    }

}

var point = new Point(2, 3);

console.log(point.toString()); // (2, 3)

console.log(point.hasOwnProperty('x')); // true
console.log(point.hasOwnProperty('y')); // true
console.log(point.hasOwnProperty('toString')); // false
console.log(point.__proto__.hasOwnProperty('toString')); // true
console.log(point.hasOwnProperty('fn1')); // false


/**
 * 跟ES5一样，所有的实例都共享一个原型对象
 * */
class Point{

}
var p1 = new Point(2,3);
var p2 = new Point(3,2);
p1.__proto__.printName = function (){ return 'opps';}
p1.printName(); // "Oops"
p2.printName(); // "Oops"


/**
 * 实例调用的方法，其实是在原型中的方法
 * */
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //这里的toString方法是在那个原型上的
    toString() {
        console.log('abcd');
        console.log(this);
        this.toString1()
    }


    toString1(){
        console.log("abcd");
        console.log(this);
        // function abc(){
        //     //this.toString();
        //     console.log(this);
        // }
        // abc.bind(this)();
    }

}

var point = new Point(2, 3);
point.toString();

/**
 * 由此可见在constructor里this.a = a; 可以把属性定义在对象本身，但是fn1却是在原型对象上的
 * */
class Point{
    constructor(a){
        this.a = a;
    }
    fn1(){
        console.log('abc');
    }
}
debugger;
Point.prototype.a = 'd';
Point.prototype.fn1 = function(){
    console.log('eef');
}
// Point.prototype ={
//     constructor() {},
//     toString() {console.log('abd');},
//     fun1(){console.log('abd');},
// }
Point.prototype ='abc';

let point = new Point('a');
console.log(point);
point.fn1();
point.toString();

/**
 * 如果是class 定义的Point，它对象的原型是不会通过这个Point.prototype = 'ab';来改变的
 * 如果是function的Point,它的对象原型是可以通过Point.prototype = 'abc';改变
 * */
class Point{

}
Point.prototype = 'ab';
console.log(Point.prototype);//f


function Point(){

}
Point.prototype = 'abc';
console.log(Point.prototype);

/**
 * 与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
 * prop属性有对应的存值函数和取值函数
 * */

class MyClass {
    constructor() {

    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        this.value = value;
        console.log('setter: '+value);
    }
}

let inst = new MyClass();
console.log(inst);

inst.prop = 123; //这里调用的set函数
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

//这个方法是得到了某个属性的修饰
var descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, "html"
);
console.log(CustomHTMLElement.prototype);
console.log(descriptor);
"get" in descriptor  // true
"set" in descriptor  // true
debugger;
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
 * 类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错，因为this的指向问题
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
const {printName}  = logger; //将logger里面的printName提取出来这个是解构赋值
console.log(printName);
printName();


/**
 * 用bind绑定就可以了
 * */
class Logger {
    constructor() {

        this.printName = this.printName.bind(this);//意思是让printName里面的this指向Logger创建出来的对象
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

















