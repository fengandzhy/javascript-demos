/**
 * 1. arr.reverse() 反转数组的顺序，并返回重新排序之后的数组， 原数组会被改变
 *
 * 2. arr.sort() 如果不传参数，默认情况下数组内的元素会被转换为字符串进行比较，因此一般不推荐直接使用默认的arr.sort()进行排序。
 * 返回值为排序后的新数组。原数组会被改变 注意：sort里接收一个比较参数
 *
 * 3. arr.concat() 没有传递参数，那么只是复制当前数组并返回副本，原数组不变；
 * 传递一个元素（数组）或多个元素（数组）,会将其合并到arr中，返回新数组，原数组不变
 *
 *
 * */

var arr1 = [1,2,3,'red','blue'];
arr1.reverse();
console.log(arr1);

var b = [1,2,3];
b.sort((a,b)=>a-b);
console.log(b);
b.sort((a,b)=>b-a);
console.log(b);

var colors = ['red','blue','green'];
var colors1 = colors.concat('gray',['a','green']);
console.log(colors);
console.log(colors1);
