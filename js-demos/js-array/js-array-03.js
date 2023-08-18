
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


/**
 * shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
 * unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
 * */
var arr = ["Lily","lucy","Tom"];
var count = arr.unshift("Jack","Sean");
console.log(count);   // 5
console.log(arr);   //["Jack", "Sean", "Lily", "lucy", "Tom"]
var item = arr.shift();
console.log(item);   // Jack
console.log(arr);   // ["Sean", "Lily", "lucy", "Tom"]







