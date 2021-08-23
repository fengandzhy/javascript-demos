/**
 * 1. trim 消除两边空格
 * 2. trimEnd 消除尾空格
 * 3. trimStart 消除头空格
 * 4. trimLeft 消除左边空格
 * 5. trimRight 消除右边空格
 * */
let str = '  Hello World! ';
let res = str.trim();
console.log(res);
res = str.trimEnd();
console.log(res);
res = str.trimStart();
console.log(res);
res = str.trimLeft();
console.log(res);
res = str.trimRight();
console.log(res);