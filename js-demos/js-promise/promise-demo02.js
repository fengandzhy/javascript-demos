const p = new Promise((resolve, reject) => {
    // resolve('success');
    console.log('ABC');
    return 'd'
});

console.log(p);

const t = p.then((value) => {
    // 成功执行这个方法会把t 的状态变成 fulfilled, 但是如果这个方法没有被成功执行,它会把t 的状态变成 rejected, 然后会执行t 的then里面第二个方法
    console.log('p success is', value);
    return value; // 这里的return 值就是 t 的then 里面第一个函数的传入参数.
}, (err) => {
    // 当promise对象的状态是rejected 的时候执行, 形参err是reject 传进来的.
    console.log('p error is', err);
});

t.then((value) => {
    console.log('t success is', value);
}, (err) => {

    console.log('t error is', err);
});