
/**
 * 执行fn()的时候,console.log(i); 它在本作用域里没有值, 所以它只能向它的父作用域里找到i, 对于定义在块级作用域里的函数, 在块里面就相当于 let fn = function()
 * 所以它的父作用域是外层块级作用域, 所以输出是3
 *
 * */
var i = 30;
{
    let i = 3;
    function fn(){
        console.log(i);
    }
}
fn();