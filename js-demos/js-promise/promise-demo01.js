const p = new Promise((resolve, reject) => {
    resolve('success');
});

const t = p.then((value) => {
    // 当promise对象的状态是fulfilled 的时候执行, 形参value是 resolve传进来的.
    console.log('process when success.', value);
}, (err) => {
    // 当promise对象的状态是rejected 的时候执行, 形参err是reject 传进来的.
    console.log('process when failed.', err);
});
console.log(t);