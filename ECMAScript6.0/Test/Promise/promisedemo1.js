
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


function aa() {
    var promise = new Promise(function(resolve, reject) {
        console.log('aass');
        window.setTimeout(function() {
            resolve('want-value');
        },1000);
    });
    console.log('abcd');
    return promise;
}

aa().then(function(done){
    console.log(done);
});



