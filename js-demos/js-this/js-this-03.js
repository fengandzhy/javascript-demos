/**
 * 因为MemberExpression是point.moveTo,这是个对象,它的base value 是point，
 * 所以这里的this 指向的是point
 * */
var point = {
    x : 0,
    y : 0,
    moveTo : function(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
    }
};
point.moveTo(1, 1);
console.log(point.x);
console.log(point.y);

/**
 * 这里的有三个地方出现this
 * */
var point = {
    x : 0,
    y : 0,
    moveTo : function(x, y) {
        console.log(this);//由于moveTo函数是被point.moveTo调用的,而point.moveTo是reference，而且base value 是point，所以这里的this指向point
        // 内部函数
        var moveX = function(x) {
            console.log(this);
            this.x = x;//根据该函数的调用方式moveX(x),moveX是reference，但它的base是enviroment record 这里的this绑定到了windows（在严格模式下是undefined）
        };
        // 内部函数
        var moveY = function(y) {
            this.y = y;//根据函数地调用方式moveY(y),这里的this绑定到了window(在严格模式下是undefined)
        };

        moveX(x);
        moveY(y);
    }
};
point.moveTo(1, 1);
console.log(point.x); //==>0
console.log(point.y); //==>0
console.log(x);
console.log(y);

/**
 * 下面这个例子从三个不同的角度来调用function getName
 * */
var name = "jay"; //一看这二逼就是周杰伦的死忠粉
var person = {
    name: "kang",
    pro: {
        name: "Michael",
        getName: function() {
            return this.name;
        }
    }
};
console.log(person.pro.getName());//Michael
var pepole = person.pro.getName;
console.log(pepole());//jay people的base value 是 enviroment record
person.able=person.pro.getName;//假设给person临时造一个属性
console.log(person.able());//kang person.able的base value 是person
// var obj = new person.pro.getName();
// console.log(obj);

/**
 * 当this出现在function的作用域里面，但是function作为一个constructor的时候，
 * 此时的this指向的是新创建出来的对象
 * */
var name = "jay"; //一看这二逼就是周杰伦的死忠粉
var person = {
    name: "kang",
    pro: {
        name: "Michael",
        getName: function() {
            this.name = "aaaa";
        }
    }
};
var obj = new person.pro.getName();//这是一个构造器
console.log(obj);//obj.name="aaa";

/**
 * (foo.bar = foo1.bar) 这个值返回不是reference，所以this的值是undefined，在非严格模式下指向window
 * */
var value = 1;
var foo = {
    value: 2,
    bar: function () {
        console.log("bbbb");
        console.log(this);
    }
}
var foo1 = {
    bar:function(){
        console.log("aaaaaaa");
        console.log(this);
    }
}
console.log((foo.bar = foo1.bar)());//会输出aaaaa


/**
 * 返回5，因为b.c是reference，但是b.c的base是b,所以取的是b里面的值
 * */
function fn(){
    console.log(this.a)
}
var b = {
    a : "5",
    c: fn
}
console.log(b.c());//5

/**
 * 在setname里面的这个this，由于函数setname是这么调用的setname('updated again'); setname是reference但是它的base是函数作用域
 * 属于Environment Record，所以在严格模式下函数setname里面的this是指向undefined，非严格模式下会是window
 * */
var c = {
    name: 'The c object',
    log:function(){
        console.log(this); //{ name: 'The c object', log: [Function] }
        var this_ = this;
        var setname=function(newname){
            console.log(this);//window
            this_.name=newname;
        }
        setname('updated again');
        console.log(this); //{ name: 'The c object', log: [Function] }
    }
}
c.log();
console.log(c.name);

/**
 * 对于如下例子object.getNameFunc()返回的是一个reference，
 * 但是这个reference的base是全局作用域,所以在严格模式下是undefined 那么this.name就报错了
 * */
'use strict'
var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        return function(){
            return this.name;
        };
    }
};
console.log(object.getNameFunc()());//The window


/**
 * 这里的this是在函数getNameFunc里面的，所以调用getNameFunc的时候是这样调用的object.getNameFunc(),
 * object.getNameFunc这是个reference，但是它的base是object所以，这里的this指向的的是"My Object"
 * */
var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        };
    }
};
console.log(object.getNameFunc()());


function User(name,age){
    console.log(this);
    this.name = name;
    this.age = age;
}

var user = new User("aa",18);
console.log(user);
console.log();


var Person = function(){};
Person.prototype.test = function(){
    console.log(Person.prototype===this);
};
Person.prototype.test();


function fn1(a){
    console.log(a);
    console.log(this);
}

fn1(this);

/**
 * 这里会打印出啦5,因为里面的那个function是自己调用的,所以在非严格模式下指向window
 * */
var a = 5;
var b={
    a:12,
    show:function(){
        setTimeout(function(){
            console.log(this.a);
        },1000);
    }
};
b.show();