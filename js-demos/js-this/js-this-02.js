/**
 * 当this在函数作用域里是，this地绑定是由函数调用的方式决定的.具体由按照如下规则来确定,
 * 1.计算 MemberExpression 的结果赋值给 ref
 * 2.如果 ref 是 Reference，并且 base value 值不是Environment Record的时候,那么 this 的值为 GetBase(ref)
 * 3.如果 ref 是 Reference，并且base value 的值是Environment Record的时候，那么this的值为undefined,在非严格模式下undefined指向window
 * 4.如果 ref 不是 Reference，那么 this 的值为 undefined
 *
 *
 * 以上是去年写的,不够全面，今年总结如下
 *
 * 1.首先判断MemberExpression 是不是Reference? 如果不是reference, 那么 this 的值为 undefined
 *
 * 2. 如果是reference，判断base value， 如何判断base value? 这个是重点中的重点.
 * 先分析出谁是base? 就要看调用函数的变量挂载在哪里。
 *
 *
 * */

/**
 * obj.c.fn()中MemberExpression是obj.c.fn, 调用函数的变量是fn,它挂载在obj.c上，所以它的base value是obj.c
 * b()中MemberExpression是b, 调用函数的变量是b, 它挂载在全局变量之上,所以它的base value 是enviroment record
 * fn1的c()中MemberExpression是c,调用函数的变量是c,它挂载在函数fn1的变量对象上,所以它的base value 是enviroment record
 *
 * 凡是挂载在全局vo和函数vo上的变量它的base value 是enviroment record
 *
 * */
var a = 1;
var obj;
obj = {
    a: 2,
    c: {
        a: 3,
        b: this.a,//这里的this就是在全局作用域里的this
        fn: function () {
            console.log(this.a);
        },
    },
    fn: function () {
        return this.a;
    }
};
function fn1(){
    var c = obj.c.fn;
    c();
}
console.log(obj.c.fn());//3,因为MemberExpression是obj.c.fn,这是个对象,它的base value是obj.c，所以this 指向obj.c
var b = obj.c.fn;
console.log('call by b()');
b(); // 1
console.log('call by fn1()');
fn1(); // 1

