
/**
 * 这两个方法都会实现迭代数组的所有项(即累加器)，然后构建一个最终返回的值。
 * reduce()方法从数组的第一项开始，逐个遍历到最后。
 * reduceRight()则从数组的最后一项开始，向前遍历到第一项。
 * 4 个参数：前一个值、当前值、项的索引和数组对象
 *
 * */
var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev, cur, index, array){
    console.log(prev);
    console.log(cur);
    console.log(index);
    console.log(array);
    return prev + cur;
},10);   //数组一开始加了一个初始值10,可以不设默认0
console.log(sum);  //25

var sum1 = values.reduce((prev,cur,index,array) => {
    console.log(prev);
    console.log(cur);
    console.log(index);
    console.log(array);
    return prev + cur;
}, 10);
console.log(sum1);

