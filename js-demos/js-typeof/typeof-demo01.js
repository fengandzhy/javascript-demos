
/**
 * JavaScript有八种内置类型
 * 空值（null)
 * 未定义(undefined)
 * 布尔值（boolean)
 * 数字（number)
 * 字符串（string)
 * 对象 (object)
 * 符号（symbol, ES6中新增)
 * 大整数（BigInt, ES2020 引入）
 *
 * */
console.log(typeof null); // 'object'
console.log(typeof  undefined); // 'undefined'
console.log(typeof  false); // 'boolean'
console.log(typeof  1); // 'number'
console.log(typeof  '1'); // 'string'
console.log(typeof {}); // 'object'

console.log(typeof  []); // 'object'
console.log(typeof  new  Date()); // 'object'
console.log(typeof  Symbol()); // 'Symbol'
console.log(typeof 123n); // 'bigint'
console.log(typeof Function);  //'function'

