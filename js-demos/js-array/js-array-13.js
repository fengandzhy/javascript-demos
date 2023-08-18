

/**
 * includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则 false。
 * */
const array1 = [22, 3, 31, 12, 'arr'];
const includes = array1.includes(31);
console.log(includes); // true

const includes1 = array1.includes(31, 3); // 从索引3开始查找31是否存在
console.log(includes1); // false



