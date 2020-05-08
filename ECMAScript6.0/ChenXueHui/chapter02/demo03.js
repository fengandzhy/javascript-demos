/**
 *
    自执行函数的作用
 * 	1、不必为函数命名，避免使用全局变量。并创建了命名空间，防止与其它js文件里的名字冲突
 * 	2、解决循环时候索引的正确值的问题
 * 	3、模块化开发
 * 	4、惰性函数
 * */


/**
 * 以下就是一个自执行函数 f1,a 对外都不可见,对外不会造成变量污染。
 * 之所以对外不可见，是因为它是在一个匿名函数的作用域里面的。
 * js中圆括号里面的内容就相当于是一个函数传参数的地方，它不是函数体
 * */
(function f1(){
    var a = 10;
    console.log(a);
})();
//console.log(f1);//error
//console.log(a);//error

(function f1(){
    var a = 10;
    console.log(a);
})
console.log(f1);//error

(function fn1(){
    console.log('abc');
}());


/**
 * 以下代码再次印证了这点，js中圆括号里面的内容就相当于是一个函数传参数的地方，它不是函数体
 * 另外就是说，这个匿名函数就相当于下面这个fn1
 *
 * */
function fn1(a){
   return a;
}

fn1(function fn2(){
    return 2;
});

fn1(function fn2(){
    return 2;
}());

fn1(function fn2(){
    return 2;
})();

/**
 * 传入一个window对象进这个自执行函数时为了加快执行速度，虽然里面也可以得到window对象，
 * 但是传进去的话，里面找window的时间省去了，这样加快速度
 *
 * mainModule，这一般是一个主模块，想去利用这个自执行函数改变的模块，这是模块化开发的核心思想，
 * 比方说，一个大型网站的首页内容很多，此时可以把页面分成很多不同模块，可以通过判断用户浏览器的位置来选择性的加载，
 * 比方说，用户的浏览器没有移动到下面的页面，那么下面页面的模块就可以不需要加载。
 *
 * undefined写在形参是为了有些浏览器undefined是可以赋值的，为了让它不能赋值，形参写入undefined，实参传入undefined.
 * 在这个例子中，实参只传了两个值，那么第三个值自然就是undefined.
 *
 * */
;(function(window,mainModule,undefined){
    var _count=0;
    mainModule.module1 = _count;
    mainModule.module2 = function(){
        return "abcd";
    }
})(window,window.mainModule || (window.mainModule={}));

console.log(mainModule.module1);
console.log(mainModule.module2());

/**
 * 上面的那个自执行函数让mainModule多了连个模块，module1&module2，
 * 经过下面的自执行函数执行后，它的module1被改变，而且又多了一个模块module4;
 * */
;(function(window,mainModule,undefined){
    var _count=1;
    mainModule.module1 = _count;
    mainModule.module4 = function(){
        console.log("this is module4");
    }
})(window,window.mainModule || (window.mainModule={}));
console.log(mainModule.module1);






