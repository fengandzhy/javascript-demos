

var a = [1,2,3];

a.push(4);//往数组后面插入，返回长度
console.log(a);


a.unshift(0);//往数组前面插入，返回新数组
console.log(a);

a.shift(); //删除数组第一个元素，并将该元素返回
console.log(a);

a.pop(); //删除数组最后一个元素，并将该元素返回
console.log(a);

a.reverse(); //反转数组，并将反转后的数组返回
console.log(a);

var a1 = [1,2,3];
var a2 = [4,5,6];
console.log(a1.concat(a2));//数组连接

var a1 = [1,2,3,4,5,6];
console.log(a1.slice(2,4)); //数组截取第一个参数起始，第二个参数为终点（不包括）

var a1 = [1,2,3,4,5,6];
console.log(a1.slice(2,4)); //数组截取第一个参数起始，第二个参数为终点（不包括）


/**
 * splice
 万能方法

 一个参数的时候
 就是起点到终点

 2个参数的时候

 第二个参数是0的话 就是从第一个参数的位置开始插入数据
 第一个起始点 第二个是从第一个起始点开始要删除的个数
 第三个参数开始 就是要替换的数据

 返回删除的数据

 *
 * */
var a1 = [1,2,3,4,5,6];
console.log(a1.splice(2,1)); //数组截取第一个参数起始，第二个参数起始起的长度，第三个参数开始为替换内容，这里没有第三个参数，就相当于删除
console.log(a1);
a1.splice(2,1,111);
console.log(a1);

/**
 * sort 排序

 从小到大去拍
 他只看第一位
 a.sort(function(a,b){return a-b;})
 排序函数只能针对 数字

 非数字的第一位相等他就会看第二位
 * */
var a1 = [11,9,4,2];
console.log(a1.sort());
console.log(a1.sort(function (a,b){ return a -b;}));


/**
 * join
 数组转字符串
 会返回字符串
 * */
var a = [1,2,3];
console.log(a.join(''));

/**
 * foreach 循环
 * */
var array = [4,5,6];
array.forEach(function (value) {
    console.log(value);
});






