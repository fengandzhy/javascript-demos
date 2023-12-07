/**
 * 数组的创建
 * */

// 使用数组字面量表示法
var arr4 = [];   //创建一个空数组
var arr5 = [20];   // 创建一个包含1项数据为20的数组
var arr6 = ["lily","lucy","Tom"];   // 创建一个包含3个字符串的数组


//使用 Array 构造函数
var arr1 = new Array();   //创建一个空数组
var arr2 = new Array(20);   // 创建一个包含20项的数组
var arr3 = new Array("lily","lucy","Tom");   // 创建一个包含3个字符串的数组
var array4 = new Array('23'); // ["23"]

//Array.of 方法创建数组(es6 新增)
let arr = Array.of(1, 2);
console.log(arr.length);//2

let arr1 = Array.of(3);
console.log(arr1.length);//1
console.log(arr1[0]);//3

let arr2 = Array.of('2');
console.log(arr2.length);//1
console.log(arr2[0]);//'2'


//Array.from 方法创建数组(es6 新增)
function arga(...args) {  //...args剩余参数数组,由传递给函数的实际参数提供
    let arg = Array.from(args);
    console.log(arg);
}

arga('arr1', 26, 'from'); // ['arr1',26,'from']

/**
 * 如果你想实行进一步的数组转换，你可以向 Array.from()方法传递一个映射用的函数作为第二个参数。
 * 此函数会将数组对象的每一个值转换为目标形式，并将其存储在目标数组的对应位置上。
 * */
function arga(...args) {
    return Array.from(args, value => value + 1);
}

let arr = arga('arr', 26, 'pop');
console.log(arr);//['arr1',27,'pop1']

/**
 * 如果映射函数需要在对象上工作，你可以手动传递第三个参数给 Array.from()方法，从而指定映射函数内部的 this 值
 * */
const helper = {
    diff: 1,
    add(value) {
        return value + this.diff;
    }
}
function translate() {
    //arguments 是一个对应于传递给函数的参数的类数组对象, 这里的变量名一定是要是arguments
    return Array.from(arguments, helper.add, helper);
}

let arr = translate('liu', 26, 'man');
console.log(arr); // ["liu1", 27, "man1"]









