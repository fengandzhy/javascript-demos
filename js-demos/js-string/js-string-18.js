/**
 * 1. substr 例如str.substring(0,6);就表示返回从索引0开始到索引6为止的字符串,其中不包含索引为6的字符
 * 那么str.substring(1,6); 就表示返回从索引1开始到索引6为止的字符串
 * str.substring(1); 表示从索引1开始一直到末尾的这段字符串
 * */
let str = 'visit Medium!';
let res = str.substring(0,6);
console.log(res);
res = str.substring(1,6);
console.log(res);
res = str.substring(1);
console.log(res);
console.log(str.indexOf('Medium!'));