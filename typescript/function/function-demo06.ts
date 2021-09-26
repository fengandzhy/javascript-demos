/**
 *  1. 注意这里创建一个函数 new Function("a", "b", "return a * b"), 最后一个参数是函数体
 *  
 * */
{
    var myFunction = new Function("a", "b", "return a * b");
    var x = myFunction(4, 3);
    console.log(x);
}