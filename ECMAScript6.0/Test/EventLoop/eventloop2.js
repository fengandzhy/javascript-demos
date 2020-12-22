

/**
 * 进入代码的执行阶段的时候，它的执行过程是这样的
 * 1. 执行 console.log('全局的');
 * 2. 发现setTimeout(()=>{
    console.log('定时器的');
},0); 0秒钟后把它放宏任务行队列

 * 3. 执行 console.log('Promise的'); 因为Promise 里面的东西就是直接在执行栈里面的
 * 4. 碰到 resolve();它就是then里面东西, 并将它放入微任务队列
 * 5. 执行console.log('再来一个全局的'); 因为它也是执行堆栈当中的代码
 * 6. 当执行堆栈当中的代码执行完了之后去微任务队列里找一个执行 那么就是console.log('then的');
 * 7. 一个事件周期完毕开始下一个事件周期,此时发现执行堆栈里没有可执行的代码, 微任务队列里也没有可执行的代码就去宏任务队列里找到一个可执行的代码就是console.log('定时器的');
 *
 * */
console.log('全局的');
setTimeout(()=>{
    console.log('定时器的');
},0);

new Promise((resolve,reject)=>{
    console.log('Promise的');
    resolve();
    //console.log('再來一個Promise的');
}).then(()=>{
    console.log('then的');
});
console.log('再来一个全局的');


