/**
 * https://promisesaplus.com/		Promises/A+规范
 * Q.js
 * when.js
 * bluebid
 *
 *
 * Promise	异步编程的一种解决方案，是一个构造函数
 * 	1、语法
 * 		new Promise(function(resolve,reject){...})
 *
 * 		参数1：resolve函数，调用后会把Promise的状态从pending变为resolved
 * 		参数2：reject函数，调用后会把Promise的状态从pending变为rejected
 * 		注意
 * 			1、两个函数都可以传参，参数代表异步操作的结果
 * 			2、两个函数调用后会执行then方法的两个参数（对应执行）
 *
 * 	2、状态
 * 		pending		初始状态，既不是成功，也不是失败
 *		fulfilled	操作成功
 *		rejected	操作失败
 * 		注意
 * 			1、状态只能改变一次，要么从初始变为成功，要么从初始变为失败。并且改变后就不会再变了
 * 			2、如果状态为fulfilled或者rejected时又可以称为resolved状态（已定型）
 * 共享方法
 *	Promise.prototype.then(onFulfilled,onRejected)
 * 		1、onFulfilled，当调用resolve的时候，该函数被执行（处理成功状态）
 * 		2、onRejected(可选)，当调用reject的时候，该函数被执行（处理失败状态）
 * 		3、返回值为一个新的Promise对象（因此可以采用链式写法）
 * 			注意：then调用以后会把返回结果做为参数传入后面的then里
 *
 * 	Promise.prototype.catch(onRejected)
 * 		1、作用与then里的onRejected一样，都用于指定发生错误时的回调函数
 * 		2、建议用catch方法代替then的第二个参数。这样能捕获前面then方法执行时候的错误
 * */


/**
 * resolve 和 reject 都是函数 分别对应着Promise的两种不同的状态
 *
 * resolve 里的参数是then里的第一个函数的参数
 *
 * */
const p = new Promise((resolve,reject)=>{
    reject('状态变为失败，会调用then里的第二个参数');
    //resolve('状态变为成功，会调用then里的第一个参数');

}).then(
    (value)=>{
        console.log(value);
    },
    error=>{
        console.log(error);
    }
);

console.dir(p);

