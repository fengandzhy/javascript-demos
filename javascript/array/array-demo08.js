/**
 * 1. arr.every()
 * 检查数组中的项是否满足某个条件，传入的函数对每一项都返回true,则返回true
 *
 * */

var nums = [1,2,3,4,5,4,3,2,1];
var flag = nums.every((item, index, arr)=> {
   item >0;
});
console.log(flag);

