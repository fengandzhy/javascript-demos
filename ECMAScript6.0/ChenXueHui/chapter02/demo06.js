/**
 * 函数参数默认值
 * */

/**
 * 函数的lenght属性是它形参的个数
 * */
function fn(v1,v2,v3,v5){}
console.log(fn.length);

/**
 * 在es6里面函数有默认参数
 * */
const fn1=(a=1,b=2)=>{
    console.log(a+b);
}
fn1();

const fn2=function(a=2,b=3){
    console.log(a+b);
}
fn2();

var fn3=function(a=2,b=3){
    console.log(a+b);
}
fn3();


/*
			 * 函数参数
			 * 	同名参数
			 * 		如果有同名参数，会取最后那个的值（避免同名参数）
			 * 	默认参数
			 * 		ES6允许直接给参数设置默认值
			 * 		注意：不能在函数内对参数再次进行let或者const的声明
			 *
			 * 函数的length属性	形参的数量
			 * 		1、用了默认值的参数，不会计入length里
			 * 		2、rest参数不会计入length里
*/


