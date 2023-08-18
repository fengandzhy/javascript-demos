
/**
 * map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
 * map() 方法按照原始数组元素顺序依次处理元素。
 * */
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map((item) => {
    return item * 2;
});
console.log(arr2);  //[2, 4, 6, 8, 10]


/**
 * filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组。
 * */
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr4 = arr3.filter(function(x, index) {
    return index % 3 === 0 || x >= 8;
});
console.log(arr4);  //[1, 4, 7, 8, 9, 10]

