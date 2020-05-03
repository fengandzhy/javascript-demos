/**
 * 在一个类中定义方法其实就等同于在这个对象的原型对象上加方法,也即是说类的方法都定义在prototype对象上面
 * */
class Point {
    constructor() {

    }

    toString() {

    }

    fun1(a){
        console.log('abcd');
    }

}

//效果与上面等同
Point.prototype = {
    constructor() {},
    toString() {},
    fun1(){},
};

Point.prototype.fun1 = function(){
    console.log('bcdee');
}

let point = new Point();
point.fun1();

console.log(Object.keys(Point.prototype));
console.log(Object.getOwnPropertyNames(Point.prototype));

