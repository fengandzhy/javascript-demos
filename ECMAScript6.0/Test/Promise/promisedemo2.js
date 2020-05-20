
/**
 * 这里执行了resolve就不会去执行reject
 * 就是说你的promise构造函数里面由逻辑来决定
 * */
const p = new Promise((resolve,reject)=>{
    reject('reject');
    resolve('resolve');

}).then(
    value => {
        console.log('success!'+value);
    },
    error => {
        console.log('error happens!'+error);
    }
);
