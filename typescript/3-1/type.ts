/**
 * 1. let 变量名:类型;//只声明，未赋值
 *  let 变量名:类型=值;//声明并赋值
 *  function fun(参数:类型,参数:类型):类型{}
 *
 *
 * */
let a:number;
a = 3;

//数字
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制
console.log(binaryLiteral);
console.log(octalLiteral);
console.log(decLiteral);
console.log(hexLiteral);

//字符串
let n: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${ n } 发布 ${ years + 1} 周年`;
console.log(words);

//布尔值
let flag: boolean = true;
console.log(flag);

//数组
let arr: number[] = [1, 2];
let arr1: Array<number> = [1, 2];
console.log(arr);
console.log(arr1);

//元组
let x: [string, number];
x = ['Runoob', 1];    // 运行正常
console.log(x[0]);    // 输出 Runoob
console.log(x[1]);    // 输出 1

