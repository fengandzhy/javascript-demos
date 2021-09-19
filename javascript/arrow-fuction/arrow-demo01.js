/**
 * 1. 注意这是两种不同的箭头函数
 * (item)=> item * 2 相当于 (item)=> {return item * 2;}
 * const fn1 = (item)=> {item * 2 ;} 是没有返回值的,返回值是undefined
 *
 * */
const fn = (item)=> item * 2 ;
console.log(fn(2)); //4

const fn1 = (item)=> {
    item * 2 ;
}
console.log(fn1(2));//undefined