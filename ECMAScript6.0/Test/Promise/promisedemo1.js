
/**
 * resolve('hello'); 只有调用resolve才会执行then
 * */
console.log('Here we go');
new Promise(resolve => {
    setTimeout( ()=>{
        resolve('hello');
    },2000);
}).then(value=>{
    console.log(value+' world');
}, error=>{
    console.log('error');
});






