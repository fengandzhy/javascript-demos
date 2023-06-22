const p = new Promise((resolve, reject) => {
    // reject('failed') // 执行reject 方法会让promise 的状态变为 rejected.
    // console.log(a); // 执行出错 也会让promise 的状态变为 rejected.
    throw new Error('error'); // 人为抛出Error,  也会让promise 的状态变为 rejected.
});
console.log(p);
/**
 * catch 方法， 这个方法的参数也是一个函数，当这个函数只有在promise 对象为 rejected 的时候才被执行，
 *
 * */
p.catch((err) => {
    console.log('In the catch method.', err);
});
