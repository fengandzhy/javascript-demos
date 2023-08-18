
/**
 * 当this在全局作用域里时，this指向全局对象本身
 * */
'use strict'
var a = 1;
var obj = {
    a: 2,
    c : {
        a:3,
        b:this.a,//这里的this就是在全局作用域里的this
    },
    fn: function () {
        return this.a;//这里的this就是函数作用域里的this了，就要根据调用函数的具体情况来分析了.
    }
}
console.log(obj.c.b);//1
console.log(obj.fn());//2





