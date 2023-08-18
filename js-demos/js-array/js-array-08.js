
/**
 * indexOf()： 从数组的开头（位置 0）开始向后查找。
 * lastIndexOf： 从数组的末尾开始向前查找。
 * 这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回-1。在比较第一个参数与数组中的每一项时，会使用全等操作符。
 *
 * */
var arr = [1,3,5,7,7,5,3,1];
console.log(arr.indexOf(5));   //2
console.log(arr.lastIndexOf(5));   //5
console.log(arr.indexOf(5,6));   //-1 意思是从 arr[6] 开始找 5 找不到 -1
console.log(arr.lastIndexOf(5,4));   //2
console.log(arr.indexOf("5"));   //-1
