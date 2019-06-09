/**
 * 惰性函数，
 *
 * 利用自执行函数的特点，让某些函数的逻辑只执行一次，这个就叫惰性函数。
 * 下面就是一个例子，你每执行一次addEvent，这个逻辑console.log('判断了一次');都会被执行，
 * 现在如何让这个逻辑只执行一次？那么下面的例子，利用自执行函数就可以实现
 *
 *  window.addEventListener 和 window.attachEvent是用来判断浏览器给dom对象增加事件的方式,
 *  因为有些浏览器是通过obj.addEventListener来给dom对象添加事件的，而有些是通过obj.attachEvent来添加
 *
 * */

function addEvent(obj,type,fn){
    if(window.addEventListener){
        console.log('判断了一次');
        obj.addEventListener(type,fn,false);
    }
    else if(window.attachEvent){
        obj.attachEvent('on'+type,fn);
    }
}

/**
 * 此时的addEvent是里面那个匿名函数执行返回后的结果(就是那个return后的函数),
 * 所以这个匿名函数一上来就执行了一遍，那么就是说，它一上来的执行，给addEvent定好了函数
 * 所以后来每次执行addEvent时不用在判断了。
 * */
const addEvent=(function(){
    if(window.addEventListener){
        console.log('判断了一次');
        return function(obj,type,fn){
            obj.addEventListener(type,fn,false);
        }
    }else if(window.attachEvent){
        return function(obj,type,fn){
            obj.attachEvent('on'+type,fn);
        }
    }
})();






