
/**
 * 第一个参数是函数
 * 第二个参数是执行间隔
 * 之后的参数全部都是函数的参数
 *
 * setInterval：按照指定的周期(以毫秒数计时)，将定时任务处理函数添加到执行队列的队尾。
 * */
var a =10;
var b =15;

setInterval(function(b,a){
    console.log(a);
},1000,a,b);

