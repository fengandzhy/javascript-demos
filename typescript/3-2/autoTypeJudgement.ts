
/**
 * TS拥有自动类型判断机制
 * 当对变量的声明和赋值同时进行时，TS编译器会自动判断变量类型
 * 所以如果你的变量的声明和赋值是同时进行的，可以省略掉类型声明
 * 
 * */
let one:number;//声明未赋值
one=7;
let two=8;// 声明一个变量并赋值

//two='xdclass';//此时会提示报错
console.log(typeof one);
console.log(typeof two);