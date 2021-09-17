/**
 * 1. arr.some()
 * 检查数组中的项是否满足某个条件，只要传入的函数对数组中某一项返回true,则返回true
 * */
var nums = [1,2,3,4,5,4,3,2,1];
var flag = nums.some((item, index, arr)=> {
    console.log(item);
    console.log(index);
    item >2;
} )
console.log(flag);




