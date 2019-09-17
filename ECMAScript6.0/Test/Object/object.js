
/**
 * 无法挂载私有属性的不是对象
 * 1.只要是对象就可以有自己的私有属性
 * */
var a  = 1;
a.b = 3;
console.log(a.b);//undefined

/**
 * b是数组也是对象
 * */
var b = [];
b.c =2;
console.log(b.c);//2


/**
 * 字面量：字面上显示的东西就叫字面量
 * 包装类：没有new的函数声明就是包装了 var a2 = String('abc'); a2里面就是包装类
 * */
var a = new String('a');
a.b='c';
console.log(a);

var a2 = String('abc');
console.log(a2);

/**
 * 像这种定义变量的方法是不行的a:{b:c},
 * 在javascript中定义一个变量必须是由=来完成的
 * */
function f1(){
    a:{
        b:3
    }
    console.log(a);
}

console.log(new f1());//这里报错因为a没有定义




function f1(){
    var f2 = function(){

    }
}

var a = new f1();
console.log(a);


/**
 * 首先哦，在这个class类当中定义方法不能前面不能有function,
 * 2. 在这个类当中定义的f2一定是在这个类的原型之上,也就是说f2一定是在这个b的原型对象上面的
 *
 * */
class f1{
    f2 (){
        console.log(this);
    };
    //在这里的f2，不能这样调用f2();
}

var b = new f1();
console.log(b);
console.log(b.f2());


/**
 * 在这个es5当中所谓的继承不牵扯类(函数)与类(函数)之间的关系
 * 把一个对象的原型对象上放置一点东西，这个对象可以取到，这既是ES5继承的本质关系
 * 下例中b继承自a
 * */
function a(){

};
a.prototype.c =10;
function b(){

}
b.prototype = new a();
console.log(new b());


function a(){
    this.k = 10;
};
a.prototype.c =10;
function b(){

}
b.prototype = new a();
console.log(new b());






/**
 * 什么是对象
 * 1.只要是对象就可以有自己的私有属性
 * 2.只要是new 创建的都是对象
 * 3.不同对象肯定不相等
 * 4.对象都会有引用机制
 * */


/**
 * 1.在普通函数下 this指向window
 * 2.有事件源的指向事件源本身
 * 3.在定时器下除es6，this指向window
 *
 *
 * */
