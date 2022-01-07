/**
 *  1. Math.abs() 绝对值
 * */
console.log(Math.abs(10));   // 10
console.log(Math.abs(-10.3)); //10.3

/**
 *  2. Math.ceil(),Math.floor() 向上取整和向下取整
 * */
console.log(Math.ceil(10.01));   // 11
console.log(Math.floor(10.01));  // 10

/**
 *  3. Math.max(),Math.min() 最大值和最小值
 * */
console.log(Math.max(5, 1, 9, 3, 7));   // 9
console.log(Math.min(5, 1, 9, 3, 7));  // 1

let arr = [5, 1, 9, 3, 7];
console.log(Math.max.apply(null, arr))   // 9
console.log(Math.min.apply(null, arr))  // 1

/**
 *  4. Math.round() 四舍五入
 * */
console.log(Math.round(3.87));   // 4
console.log(Math.round(3.39));  // 3

/**
 *  5. Math.random() 函数返回一个浮点数,  伪随机数在范围从0到小于1，也就是说，从0（包括0）往上，但是不包括1（排除1）
 * */
console.log(Math.random());
var ary = ['red', 'orange', 'yellow', 'blue', 'green']
function getRandom (min, max) {
    return	ary[Math.floor(Math.random()*(max - min))]
}
console.log(getRandom(0, ary.length));

/**
 *  6. Math.pow() 指数运算
 * */
console.log(Math.pow(2, 2)); // 4
console.log(Math.pow(2, 3)); // 8

/**
 *  7. Math.sqrt() 平方根
 * */
console.log(Math.sqrt(9)); // 输出3
console.log(Math.sqrt(-9)); // 输出NaN




