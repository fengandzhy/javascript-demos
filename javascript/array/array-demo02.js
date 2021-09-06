/**
 * 1. 在js当中Array是一个函数, 所有的数组都是通过Array new出来的
 *
 * 2. 判断一个东西是不是数组 以下两种方法
 * Array.isArray(arr)
 * Array.isArray(arr)
 *
 *
 * */

var arr = [1,2,3];

console.log(arr instanceof Array);
console.log(Array.isArray(arr));
console.log(arr.constructor);
console.log(Array)
