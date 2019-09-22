/**
 * 线程
 * 	1、单线程
 * 		1、只能同时进行一个任务，后面的任务想要进行就必需等前面的任务完成了
 * 		2、可以保证代码执行顺序，但是容易导致阻塞
 * 	2、多线程
 * 		1、同时可以执行多个任务，谁也不挡谁
 * 		2、可以解决阻塞问题，但是会改变代码执行顺序。改变顺序后可能让程序变得稍微难理解了一些
 * 	注意
 * 		js并不是多线程，只是提供了事件循环机制来模拟多线程
 *
 * 同步模式	代码按顺序执行，前面没有执行完后后面的代码不会执行
 * 异步模式	代码可以同时执行，前面没执行完的代码不会影响后面的代码
 * 	1、回调函数
 * 	2、事件
 * 	3、定时器
 * 	4、AJAX
 * 	5、发布/订阅（设计模式）
 * 	6、Promise（ES6）
 * 	7、Generator函数（ES6）
 * 	8、async函数（ES7）
 * */


//同步模式
/*for(let i=0;i<200000;i++){
    const span=document.createElement("span");
    span.innerHTML=i;
    document.body.appendChild(span);
}
console.log('终于等到我了！');*/

//异步模式
setTimeout(()=>{
    console.log('老沙最慢');
},100);
setTimeout(()=>{
    console.log('八戒第二');
},0);
console.log('猴哥最快');

