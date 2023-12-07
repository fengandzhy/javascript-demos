/**
 * 1. match 根据正则表达式在字符串中搜索匹配项, 并将匹配项作为Array对象返回.
 *
 * */
let str = 'The rain in SPAIN stays mainly in the plain';
let res = str.match(/ain/g);
console.log(res);