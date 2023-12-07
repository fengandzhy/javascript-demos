/**
 * 1.charCodeAt是返回指定索引处的字符的Unicode, 索引是从0开始, 如果超出字符串长度则返回NaN
 *
 * */
let str = "Hello world!";
let res = str.charCodeAt(1)
console.log(res);
res = str.charCodeAt(100);
console.log(res);