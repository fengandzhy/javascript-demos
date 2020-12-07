/**
 * 任务队列（消息队列）
 * 	1、是一个有序的任务集合列表（放的都是异步任务），在js中任务队列可以有多个
 * 	2、当代码里有异步操作的时候，就会把异步操作分发到对应的任务对列里
 * 	3、每一个任务都会有任务源
 * 	4、一个队列里可以放多个任务，任务的读取方式为先进先出，后进后出
 *
 * 	分类
 * 		1、task（macrotask）		宏任务队列
 * 			1、DOM操作
 * 			2、用户交互（事件）
 * 			3、网络任务（ajax）
 * 			4、history traversal任务（h5当中的历史操作）
 * 			5、定时器
 * 		2、microtask				微任务队列
 * 			1、Promise
 * 			2、process.nextTick（nodejs）
 * 			3、MutationObserver（H5里监听DOM节点变化）
 *
 *
 * 事件循环	Event Loop
 * 	1、它是HTML规范中定义的或者是DOM中定义的，并不是ECMAScript定义的
 * 		参考（打不开的话需翻墙）
 * 			1、https://www.w3.org/TR/html5/webappapis.html#event-loops
 * 			2、https://html.spec.whatwg.org/#event-loops
 * 	2、它包括两种，一种在浏览器上下文里，一种在web workers里（HTML5）
 * 	3、它是一种分配模式，把任务队列里的任务分配给全局执行上下文进行执行
 * 	4、执行顺序
 * 		1、先把宏任务队列里的任务拿出来交给全局执行上下文执行
 * 		2、再把微任务队列里的任务拿出来交给全局执行上下文执行
 * 		3、不断的循环
 * 	注意：
 * 		1、任务队列（异步代码）里的代码最终还是要放到全局执行上下文（同步的代码）里去执行
 * 		2、当全局执行上下文里的代码都执行完了才去执行任务队列里的代码
 * 		3、宏任务与微任务的区别是：宏任务会再下一次的Event Loop里执行，微任务会在本次Event Loop里执行
 * */

console.log('全局的');
setTimeout(()=>{
    console.log('定时器的');
},0);

new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     console.log('Promise的');
    // },0);
    console.log('Promise的');
    resolve();
}).then(()=>{
    console.log('then的');
});
console.log('又是全局的');


