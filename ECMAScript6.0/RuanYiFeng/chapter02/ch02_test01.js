
/**
 * ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
 * */

/**
 * 数组结构赋值系列
 * */
let [a, b, c] = [1, 2, 3];
console.log(a);//1
console.log(b);//2
console.log(c);//3

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
console.log(bar);
console.log(baz);


let [ , , third] = ["foo", "bar", "baz"];
console.log(third);// "baz"

let [x, , y] = [1, 2, 3];
console.log(x); // 1
console.log(y);// 3

/**...tail代表的是一个数组*/
let [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail);// [2, 3, 4]

let [x, y, ...z] = ['a'];
console.log(x);// "a"
console.log(y);// undefined
console.log(z);// []

/**带省略号的元素...z必须是最后一个元素*/
let [x,y, ...z] = ['a','b','c'];
console.log(x);// "a"
console.log(y);// b
console.log(z);// [c]

/**这里不能成功解构foo是undefined*/
let [bar, foo] = [1];
console.log(foo);// undefined

let [x, y] = [1, 2, 3];
console.log(x);// 1
console.log(y);// 2

/**左边出现let[]右边一定要是数组，不是数组报错 或者也可以是某种具有 Iterator 接口的数据结构*/
let [foo] = 1;//报错

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first);// 0
console.log(second);// 1
console.log(third);// 2
console.log(fourth);// 3
console.log(fifth);// 4
console.log(sixth);// 5

/**只有当一个数组成员严格等于undefined，默认值才会生效*/
let [x, y = 'b'] = ['a'];
console.log(x);// a
console.log(y);// b

let [x, y = 'b'] = ['a',''];
console.log(x);// a
console.log(y);// ''


function f() {
    console.log('aaa');
}

let [x = f()] = [1];
console.log(x);//1

function f() {
    console.log('aaa');
}
let [x = f()] = [];
console.log(x);//undefined 因为f没有返回值
