/**
 * 1. arr.splice(index, num)
 * 传入两个参数，第一个为位置（ 数组下标），第二个为删除的项数，可以删除任意项，返回删除元素组成的数组，原数组变了
 *
 * 2. arr.splice(index,0,item)
 * 传入3个参数， [起始位置（ 数组下标） | 要删除的项数 为0 | 要插入的元素]， 最终返回删除掉的元素组成的数组，
 * 因为这里删除项数为0，因此会返回空数组
 *
 * 3.arr.splice(index, num, item)
 * 传入3个参数，[起始位置 | 要删除的项数 | 要插入的任意项数]， 最终返回删除掉的元素组成的数组
 *
 * */
var colors = ['red','blue','green'];
var arr = colors.splice(1,1);
console.log(colors);
console.log(arr);

const array = [1,2,3,4,5,6,7,8,9];
const array1 = array.splice(3,4);
console.log(array);
console.log(array1);



var colors = ['red','blue','green'];
colors.splice(1,0,'gray'); //[]
console.log(colors);

var colors = ["red", "gray", "blue", "green"]
colors.splice(2,2,'yellow') // ["blue", "green"]
console.log(colors);



