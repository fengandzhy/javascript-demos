/**
 * 函数传值的方式
 * */

/**
 * 1、如果参数是原始类型数据，传递方式是传值。在函数体内修改参数值，不会影响函数外面的值
 * */


const [num,str,b] = [12,'kavin',true];
const fn1=(v1,v2,v3)=>{
    console.log(v1,v2,v3);
    v1=20,v2='geen',v3=false;
    console.log(v1,v2,v3);
}
fn1(num,str,b);
console.log(num,str,b);


/**
 * 2、如果参数是复合类型数据，传递方式是传址。在函数内部修改参数值（修改属性），将会影响函数外面的值
 *  传入参数的是一个原来复合类型数据的refernece，也就是说fn3(obj,arr,fn2); 传入的不是obj，arr，fn2本身，而是它们的reference
 *  此时的函数里refernece和原来的refernece同时指向一个变量，如果通过这个函数refenece修改了变量则原来的reference也会体现出来
 *
 * */
const obj={a:10},
    arr=[12,35,67],
    fn2=()=>{};
fn2.index="An index of fn2";

const fn3=(v1,v2,v3)=>{
    v1.a='sbdb',v2[0]=true,v3.index='change the index';
}
fn3(obj,arr,fn2);
console.log(obj,arr,fn2.index);

/**
 * 3、如果参数是复合类型数据，函数内部修改的不是参数对象的某个属性，而是替换掉整个参数，这时不会影响函数外面的值
 * 这是因为你传入参数的是这个复合型数据的reference，这样重新赋值就相当于，将这个函数里面的reference重新指向了另外一个变量，这样不会影响到原来reference的指向
 * */
const obj={a:10},
    arr=[12,35,67],
    fn2=()=>{};
const fn4=(v1,v2,v3)=>{
    v1={a:10},v2='kevin',v3=20;
}
fn4(obj,arr,fn2);
console.log(obj,arr,fn2);//函数里的reference重新指向了另外的变量，所以不会改变外面的值



