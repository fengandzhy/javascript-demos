
/**
 * map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
 * map() 方法按照原始数组元素顺序依次处理元素。
 * */
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map((item) => {
    return item * 2;
});
console.log(arr2);  //[2, 4, 6, 8, 10]
