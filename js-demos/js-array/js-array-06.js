
/**
 * slice()：返回从原数组中指定开始下标到结束下标之间的项组成的新数组。
 * slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。
 * 在只有一个参数的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。
 * 如果有两个参数，该方法返回起始和结束位置之间的项，但不包括结束位置的项。
 * 当出现负数时，将负数加上数组长度的值 来替换该位置的数
 *
 *
 * */
var arr = [1,3,5,7,9,11];
var arrCopy1 = arr.slice(1);
var arrCopy2 = arr.slice(1,4);
var arrCopy3 = arr.slice(1,-2);//相当于arr.slice(1,4)
var arrCopy4 = arr.slice(-4,-1);//相当于arr.slice(2,5)
console.log(arr);   //[1, 3, 5, 7, 9, 11](原数组没变)
console.log(arrCopy1);   //[3, 5, 7, 9, 11]
console.log(arrCopy2);   //[3, 5, 7]
console.log(arrCopy3);   //[3, 5, 7]
console.log(arrCopy4);   //[5, 7, 9]
