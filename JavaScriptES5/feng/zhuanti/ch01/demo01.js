var count =1;
var container = document.getElementById('container');



container.onmousemove = function(){
    getUserAction();
}

console.log(container.onmousemove);



/**
 * 这里的this指向container对象,类似的就相当于下面的this
 * var a ={
    b:function(){
        console.log(this);
    }
}
 a.b();
 *
 * */
function getUserAction(){
    console.log(this);
    container.innerHTML = count++;
}




// container.onmousemove = function(func, wait){
//     var timeout;
//     return function () {
//         clearTimeout(timeout)
//         timeout = setTimeout(func, wait);
//     }
// }(getUserAction, 1000);
//

