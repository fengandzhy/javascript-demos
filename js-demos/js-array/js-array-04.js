

/**
 * sort() 方法用于对数组的元素进行排序。 排序顺序可以是字母或数字，并按升序或降序。默认排序顺序为按字母升序。
 *
 * */
var arr1 = ["Lily","lucy","Tom",'tom'];
console.log(arr1.sort());   // ['Lily', 'Tom', 'lucy', 'tom'] 它是根据先排大写字母再排小写字母而来的
console.log(arr1); // 原数组被改变
arr2 = [13, 24, 51, 3];
console.log(arr2.sort());   // [13, 24, 3, 51]
console.log(arr2);   // [13, 24, 3, 51](元数组被改变)

console.log(arr2.sort((v1,v2) => v1-v2)); // [3, 13, 24, 51]
console.log(arr2); // 原数组再次被改变

var arr3 = ["Lily","lucy","Tom",'tom'];
console.log(arr3.sort((v1,v2) => v1-v2)); // ['Lily', 'lucy', 'Tom', 'tom'] 这里可以做到完全按字母来排序
