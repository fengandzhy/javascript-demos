
/**
 * 这里的this指向的是那个<div>本身,
 * container.onmousemove = debounce(getUserAction, 1000); 这个意思就是让
 * container.onmousemove = function(){....}
 * 然后鼠标在那个<div>里面移动就相当于container.onmousemove(); 那么这个this就指向了<div>
 *
 * */
function debounce(func, wait) {
    var timeout;

    return function () {
        var context = this;
        console.log(this);
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context)
        }, wait);
    }
}

function getUserAction(){
    container.innerHTML = count++;
}

container.onmousemove = debounce(getUserAction, 1000);

