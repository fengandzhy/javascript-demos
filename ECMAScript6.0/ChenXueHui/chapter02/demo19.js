/**
 * apply
 * 	作用
 * 		调用一个函数，用另外一个对象替换被调用函数的this（指定函数内部this的指向）
 * 	语法
 * 		函数名.call(thisArg,[arg1,arg2...])
 * 	参数
 * 		thisArg			函数里的this指向
 * 		[arg1,arg2...]	这些参数是调用函数时传的实参，它是个数组或类数组
 * 	注意
 * 		1、thisArg的值为空、null、undefined的时候this指向window
 * 		2、thisArg的值为原始值时候，this指向它们对应的包装对象
 * 		3、它的用法与call一样，只不过第二个参数的类型不同，同时也不是所有方法都能用apply
 * 		4、不适用于箭头函数
 */
function fn(name,age){
    console.log(this,name,age);
}
fn.apply({a:10},[1,2]);


function fn1(){
    console.log(arguments[0]);
    console.log(arguments.length);
    console.log(typeof arguments);
    fn.apply({a:10,b:20},arguments);
}

fn1(1,2,3);

/**
 * call 比 apply 快很多很多
 * */
function work(a,b,c){}
var arr=[1,2,3];

for(var i=0;i<5;i++){
    console.time('apply');
    for(var j=0;j<10000000;j++){
        work.apply(null,arr);
    }
    console.timeEnd('apply');

    console.time('call');
    for(var j=0;j<10000000;j++){
        work.call(null,1,2,3);
    }
    console.timeEnd('call');
}
