
/**
 * 这里执行了resolve就不会去执行reject
 * 就是说你的promise里面究竟是执行resolve还是reject这个是由具体的业务逻辑来决定的
 *
 * 另外，对于这个这个then, 它里面需要传入两个参数,两个都是函数, 第一个是保证resolve来执行的,它的参数就是传入resolve的参数, 第二个是保证reject来执行的,它的参数是传入reject的参数
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
