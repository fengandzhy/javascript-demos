/**
 * 浮点数运算精度问题
 * */

var a = 0.1;
var b = 0.2;
var c = a+b;
console.log(c);//0.3000000000004
console.log(parseFloat((a+b).toPrecision(12)));

var a = 1;
var b = 0.9;
var c = a-b;
console.log(c);//0.0999999999998
console.log(parseFloat(c.toPrecision(12)));


/**
 * 另外一种解决方案
 * */
function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
console.log(0.1 + 0.2);
console.log(roundFractional(0.1 + 0.2, 1));
console.log(0.1 * 0.2);
console.log(roundFractional(0.1 * 0.2, 2));


