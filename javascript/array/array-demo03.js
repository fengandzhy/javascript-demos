/**
 * 1. arr.push(item) 接受任意数量的参数，添加到数组末尾，返回新数组的长度
 *
 * 2. arr.pop() 删除数组最后一项，返回删除的项
 *
 * 3. arr.unshift() 接受任意数量的参数，添加到数组头部，返回新数组的长度
 *
 * 4. arr.shift() 删除数组第一项，返回删除的项
 * */

var colors = ['red'];
colors.push('blue','green');
console.log(colors);

var colors = ['blue','green']
colors.pop();
console.log(colors);

var colors = ['red'];
colors.unshift('green');
console.log(colors);

var colors = ['blue','green'];
colors.shift();
console.log(colors);
