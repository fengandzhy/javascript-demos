/**
 * 1. arr.indexOf()
 * 验证数组中是否含有某个元素，返回第一个匹配到的元素在数组中所在的位置，如果没有，则返回 -1
 *
 * 2.arr.lastIndexOf()
 * 验证数组中是否含有某个元素，不过是从数组尾部开始查找，返回第一个匹配到的元素所在的位置，如果没有，则返回-1
 *
 * */

var colors =  ["red", "gray", "yellow"];
console.log(colors.indexOf('gray')); // 1
console.log(colors.indexOf('mm'));

var colors =  ["red", "gray", "yellow","gray"];
console.log(colors.indexOf('gray')); // 3
console.log(colors.lastIndexOf('mm'));
