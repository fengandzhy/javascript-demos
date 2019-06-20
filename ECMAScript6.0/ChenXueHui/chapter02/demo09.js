/**
 * 块级作用域
 * */

/**
 * 所谓块级作用域就是在ES6当中,let 和const定义的变量，它的有效范围可以被局限在一对大括号内
 * 例如下例，在大括号外就无法访问到a
 * */
{
    let a =10;
}
console.log(a);//报错,无法访问到a

/**
 * 块级作用域里的变量也具备向上查找的特性,
 * */
let a =10;
{
    console.log(a)
}

/**
 * 看来if也是个块级作用域
 * */
if(true){
    console.log('abcd');
    let a = 3;
}
console.log(a);//无法访问






