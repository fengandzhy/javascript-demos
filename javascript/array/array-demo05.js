/**
 * 1. arr.slice 剪切数组，返回剪切之后的数组，元素不会改变
 *  1) 传入一个参数，表示起始位置，结束位置为最末尾
 *  2) 传入2个参数，表示起始位置与结束位置，但不包括结束位置所在的元素
 *
 * */

var colors = ['red','blue','green'];
var arr=colors.slice(2);
console.log(colors);
console.log(arr);


var colors = ['red','blue','green'];
var arr=colors.slice(1,2);
console.log(colors);
console.log(arr);
