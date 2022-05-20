/**
 * 1. replace 将原字符串中第一次出现某个值的地方替换成新的值. 例如将第一个Medium替换成Dev.to
 *
 * */
let str = 'visit Medium! and Medium!';
let res = str.replace('Medium','Dev.to');
console.log(res);

str = 'visit\r\n Medium!\n and\n Medium!';
//console.log(str.replace('\n','</br>'));

console.log(str.replace(/[\r\n]/g, '</br>'));