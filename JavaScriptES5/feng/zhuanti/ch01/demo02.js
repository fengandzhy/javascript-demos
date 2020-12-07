/**
 * 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
 * 如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，
 * 总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐
 * */


/**
 * 返回的这个函数决定了每执行一次onmousemove, 它就要把之前的timeout给咔嚓掉, 这样才能保证只要触发了onmousemove事件,就会在wait秒之后才去执行func
 * 第一个进入这个函数的timeout肯定是undefined, 但随后随着事件的触发会源源不断的产生timeout, 但只要后产生的timeout把前产生的timeout咔嚓掉,那么就能实现上面的功能
 * */
function debounce(func, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    }
}
function getUserAction(){
    container.innerHTML = count++;
}

/**
 * 它这个地方的执行是这样子的, 当js代码运行到这里的时候(就是刚开始js代码进来的时候), 它就会执行这个debounce函数 然后将返回的函数赋值给了container.onmousemove
 * 这个返回的函数只有当container.onmousemove触发的时候才会运行
 * */
container.onmousemove = debounce(getUserAction, 1000);