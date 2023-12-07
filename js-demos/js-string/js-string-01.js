/**
 * 1.charAt是返回指定索引处的字符串, 索引是从0开始, 如果超出字符串长度则返回空字符串
 *
 * */
let str = "Hello world!";
let res = str.charAt(1);
console.log(res);
res = str.charAt(100);
console.log(res==='');
