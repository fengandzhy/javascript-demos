

/**
 * join()方法用于把数组中的所有元素转换一个字符串。元素是通过指定的分隔符进行分隔的。默认使用逗号作为分隔符
 *
 * */
var arr = [1,2,3];
console.log(arr.join());   // 1,2,3
console.log(arr.join("-"));   // 1-2-3
console.log(arr.join('|')); // 1|2|3
console.log(arr);   // [1, 2, 3]（原数组不变）



function repeat(str, n){
    //一个长度为n+1的空数组用string去拼接成字符串,就成了n个string的重复
    return new Array(n+1).join(str);
}

console.log(repeat("abc", 3));   // abcabcabc
console.log(repeat("Hi", 5));   // HiHiHiHiHi