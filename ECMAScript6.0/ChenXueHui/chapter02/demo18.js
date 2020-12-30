
/**
 * 	call
 * 		作用
 * 			调用一个函数，用另外一个对象替换被调用函数的this（指定函数内部this的指向）
 * 		语法
 * 			函数名.call(thisArg,arg1,arg2...)
 * 		参数
 * 			thisArg			函数里的this指向
 * 			arg1,arg2...		这些参数是调用函数时传的实参
 * 		用途
 * 			1、在函数（封装的方法、回调函数...）里指定this的指向
 * 			2、借用其它对象身上的方法
 * 			3、继承（面向对象讲）
 * 		注意
 * 			1、thisArg的值为空、null、undefined的时候this指向window
 * 			2、thisArg的值为原始值时候，this指向它们对应的包装对象
 * 			3、由于箭头函数的this总是指向定义时的对象，所以call对于箭头函数无效
 * 			4、借用其它对象身上的方法时需要注意
 * 				1、不是任意一个对象都能借用别人的方法，只有这个对象能满足人家方法里this类型的要求才能借用
*/

/**
 * call 其实也是在运行函数fn.call() 与 fn() 其实是一样的，但是call的第一个参数,就是要改编 fn 函数里的this指向
 *
 * */
function fn(){
    console.log(this);
}
var obj={};

fn();
fn.call();
fn.call(null);
fn.call(undefined);

fn.call(1);
fn.call('kaivon');
fn.call(true);
fn.call(obj);
fn.call(fn);

/**
 * fn.call(undefined); 只是让fn作用域里面的this指向了window,并不可以改变其他的地方的this指向
 * */
var obj = {
    a:10,
    b:function (){
        console.log(this.a);
    }
}

function fn(){
    obj.b();
    obj.b.call(undefined);//undefined让这个函数里面的this指向了window
}
fn();
fn.call(undefined);


/**
 * 传递参数
 * */

function fn(name,age){
    console.log(this,name,age);
}

fn.call([1],'Sam',12);

/**
 * [].slice()本来是要截取一个空的数组,现在只能截取str
 * */
const str='kaivon';
const arr=[].slice.call(str,1,2);
console.log(arr);

