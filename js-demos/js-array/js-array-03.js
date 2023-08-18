
/**
 * push() 方法从数组末尾向数组添加元素，可以添加一个或多个元素。
 * pop() 方法用于删除数组的最后一个元素并返回删除的元素。
 * */
var arr = ["Lily","lucy","Tom"];
var count = arr.push("Jack","Sean");
console.log(count);  // 5
console.log(arr);   // ["Lily", "lucy", "Tom", "Jack", "Sean"]
var item = arr.pop();
console.log(item);   // Sean
console.log(arr);   // ["Lily", "lucy", "Tom", "Jack"]


