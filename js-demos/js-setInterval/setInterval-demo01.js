
/**
 * setInterval 第一个参数是执行函数, 第二个参数是时间间隔, 一般为毫秒, 后面的参数皆是前面第一个参数也就是执行函数的参数
 *
 * */
let i = 0;
const interval = setInterval(function(a,b) {
    console.log('a',a);
    console.log('b',b);
    i++;
    if(i > 5){
        clearInterval(interval); // 用这种方式结束定时器
    }
},1000,3,4,5)


