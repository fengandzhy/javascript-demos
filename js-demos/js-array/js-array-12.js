
/**
 * every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回 true。
 * */
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function(x) {
    return x < 10;
});
console.log(arr2);  //true
var arr3 = arr.every(function(x) {
    return x < 3;
});
console.log(arr3);  // false


/**
 * some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回 true。
 * */
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function(x) {
    return x < 3;
});
console.log(arr2);  //true
var arr3 = arr.some(function(x) {
    return x < 1;
});
console.log(arr3);  // false

