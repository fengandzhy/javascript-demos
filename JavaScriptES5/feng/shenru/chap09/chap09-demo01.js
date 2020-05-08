/**
 * 值传递方式
 * */

/**
 * 基本数据类型,按值传递
 * 当传递 value 到函数 fn1 中，相当于拷贝了一份 value，假设拷贝的这份叫 _value，函数中修改的都是 _value 的值，而不会影响原来的 value 值
 * */

var value = 3;
function fn1(value){
    v = 4;
}
fn1(value);
console.log(value);

/**
 * 如果不是基本数据类型,传过去的是引用的副本
 * */
var value = new Number(3);
function fn1(value){
    v = 4;
}
fn1(value);
console.log(value);


var obj = {
    value: 1
};
function foo(o) {
    o.value = 2;
    console.log(o.value); //2
}
foo(obj);
console.log(obj.value) // 2


/**
 * 复杂数据结果传递的是引用的副本，通过这个副本来修改了这个值.
 * 内存中有一个值是这样的{value:1},现在有一个引用指着它，就是obj，
 * 拷贝了一个引用到函数foo中去，就是说现在有两个引用指向了它，
 * 通过第二个引用修改了这个值.
 *
 * */
var obj = {
    value: 1
};
function foo(o) {
    o.value = 2;
    console.log(o.value); //2
}
foo(obj);
console.log(obj.value) // 2

/**
 * 同理也是一样，但是在这个例子中，修改了第二个引用的值，使得它指向了一个新的值就是2，
 * 此时原来的内存中这个变量的值{value:1}
 *
 * */
var obj = {
    value: 1
};
function foo(o) {
    o = 2;
    console.log(o); //2
}
foo(obj);
console.log(obj.value) // 1


/**
 * 注意这样的关键点
 * 1.运算符=就是创建或修改变量在内存中的指向.
 * 2.初始化变量时为创建,重新赋值即为修改.
 *
 * 根据这样的关键点，以下的代码可以解释成这样
 *
 * */
var a = {b: 1};// a = {b: 1}
var c = a;// c = {b: 1}
a = 2;// 重新赋值a
console.log(c);// {b: 1}




