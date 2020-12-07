

/**
 *各种打印
 * 
 */
console.error(1);//打印错误的东西
console.warn(1); //打印警告
console.info(1);
console.log(1);



console.log(screen);//整个屏幕的参数，不单指浏览器

window.open('http://www.baidu.com/'); //注意如果用window.open一定要地址上加入http 不能直接www.baidu.com


//location对象
console.log(location);
location.href='http://www.baidu.com/'; 直接页面跳转到

console.log(history);

console.log(1 == '1'); //true 因为==会触发隐式转换
console.log(1 === '1'); //false 因为数据类型不等

/**
 * js 加法当有一个字符串时，就启动了字符串拼接属性，就是把数字当成字符串拼接起来了，而不是当成数字相加，
 * 唯一的办法就是把字符串变成数字再相加
 */
console.log('5'+10); //510
console.log(3+'5'+10); //3510
console.log(3+'5'*1+10); //18


console.log(100<100.000000000000001);//false当小数点后面有13个0的时候为false，所以js不适合精度计算
console.log(0.1+0.2);//0.30000000000000004 这就是js的一个计算bug


