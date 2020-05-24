function debounce(func,wait){
    let timeout;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            func.call(context,args);
        },wait);
    }
}

function getUserAction(){
    container.innerHTML = count++;
}

container.onmousemove = debounce(getUserAction, 1000);
