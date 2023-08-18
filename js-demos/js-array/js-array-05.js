
/**
 * reverse() 方法用于颠倒数组中元素的顺序。
 * */
var arr = [13, 24, 51, 3];
console.log(arr.reverse());   //[3, 51, 24, 13]
console.log(arr);   //[3, 51, 24, 13](原数组改变)

/**
 * concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
 * */
var arr = [1,3,5,7];
var arrCopy = arr.concat(9,[11,13]);
console.log(arrCopy);   //[1, 3, 5, 7, 9, 11, 13]
console.log(arr);   // [1, 3, 5, 7](原数组未被修改)
