/**
 * 1. arr.filter()
 * 对数组中的每一项运行给定函数，返回该函数会返回true的项组成的新数组
 * 
 * */
var nums = [1,2,3,4,5,4,3,2,1];
var arr = nums.filter((item, index, arr)=> {
    return item >2 && item < 4
} );
console.log(arr);
