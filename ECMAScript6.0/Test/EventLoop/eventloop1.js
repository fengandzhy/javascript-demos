
/**
 * 1. 执行发现console.log('老沙最慢'); 100毫秒后放进宏任务队列里
 * 2. 执行sleep(3000);
 * 3. 执行发现console.log('八戒第二'); 立即放进宏任务队列里，但是由于上一步执行了3秒所以在宏任务队列里它在console.log('老沙最慢');的后面
 * 4. 执行console.log('猴哥最快'); 之后检查微任务队列，发现没有可执行的代码，结束事件的一次循环
 * 5. 开启事件的另外一个循环EC里面没有可执行代码,微任务队列里也没有可执行代码 就到宏任务队列里去找首先发现console.log('老沙最慢'); 其次是console.log('八戒第二');
 *
 * */
setTimeout(()=>{
    console.log('老沙最慢');
},100);

sleep(3000);

setTimeout(()=>{
    console.log('八戒第二');
},0);
console.log('猴哥最快');

function sleep(n) {
    var start = new Date().getTime();
    //  console.log('休眠前：' + start);
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
}