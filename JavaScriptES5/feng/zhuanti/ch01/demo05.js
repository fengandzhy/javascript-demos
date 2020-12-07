function debounce(func,wait,immidiate){
    //debugger;
    var timeout;
    return function(){
        var context = this;
        var args = arguments;
        if(timeout) clearTimeout(timeout);
        if(immidiate){
            var callN = !timeout;
            console.log(timeout);
            timeout = setTimeout(function(){
                timeout = null;
            }, wait);
            if (callN) func.apply(context, args)
        }else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}

function getUserAction(){
    container.innerHTML = count++;
}

container.onmousemove = debounce(getUserAction, 1000,true);