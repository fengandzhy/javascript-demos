
/**
 * 这里吧setTimeout换成了readFile 道理也是一样
 * readFile 也是在宏任务队列里面的
 * */
const fs = require('fs');

fs.readFile('./files/hello.txt',(err,data)=>{
    if(err) throw err;
    //console.log(data); //这里的data实际上是一个buffer
    console.log(data.toString());
});

console.log('********************************');
sleep(10000);
console.log('********************************');

//这里如果加了utf8就不用在后面加一个data.toString()
fs.readFile('./files/hello.txt','utf8',(err,data)=>{
    if(err) throw err;
    //console.log(data); //这里的data实际上是一个buffer
    console.log(data);
});

new Promise((resolve,reject)=>{
    console.log('Promise的');
    resolve();
}).then(()=>{
    console.log('then的');
});


function sleep(n) {
    var start = new Date().getTime();
    //  console.log('休眠前：' + start);
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
}