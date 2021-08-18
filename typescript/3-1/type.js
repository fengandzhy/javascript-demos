/**
 * 1. let 变量名:类型;//只声明，未赋值
 *  let 变量名:类型=值;//声明并赋值
 *  function fun(参数:类型,参数:类型):类型{}
 *
 *
 * */
var a;
a = 3;
//数字
var binaryLiteral = 10; // 二进制
var octalLiteral = 484; // 八进制
var decLiteral = 6; // 十进制
var hexLiteral = 0xf00d; // 十六进制
console.log(binaryLiteral);
console.log(octalLiteral);
console.log(decLiteral);
console.log(hexLiteral);
//字符串
var n = "Runoob";
var years = 5;
var words = "\u60A8\u597D\uFF0C\u4ECA\u5E74\u662F " + n + " \u53D1\u5E03 " + (years + 1) + " \u5468\u5E74";
console.log(words);
//布尔值
var flag = true;
console.log(flag);
//数组
var arr = [1, 2];
var arr1 = [1, 2];
console.log(arr);
console.log(arr1);
var x;
x = ['Runoob', 1]; // 运行正常
console.log(x[0]); // 输出 Runoob
console.log(x[1]); // 输出 Runoob
