
/**
 * toLocaleString() 和 toString()
 * 将数组转换为字符串
 * */
const array1 = [22, 3, 31, 12];
const str = array1.toLocaleString();
const str1 = array1.toString();

console.log(str); // 22,3,31,12
console.log(str1); // 22,3,31,12





/**
 * find()与 findIndex()方法均接受两个参数：一个回调函数，一个可选值用于指定回调函数内部的 this。
 * 该回调函数可接受三个参数：数组的某个元素，该元素对应的索引位置，以及该数组本身。
 * 该回调函数应当在给定的元素满足你定义的条件时返回 true，而 find()和 findIndex()方法均会在回调函数第一次返回 true 时停止查找。
 * 二者的区别是：find()方法返回匹配的值，而 findIndex()返回匹配位置的索引。
 *
 * */
let arr = [1, 2, 3, 'arr', 5, 1, 9];
console.log(arr.find((value, keys, arr) => {
    return value > 2;
})); // 3 返回匹配的值

console.log(arr.findIndex((value, keys, arr) => {
    return value > 2;
})); // 2 返回匹配位置的索引


