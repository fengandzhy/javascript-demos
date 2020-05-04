/**
 * this指向
 * 	1、全局环境中的this指向全局对象本身（在浏览器环境下指向window）
 * 	2、函数环境中的this，由调用函数的方式决定
 * 		1、如果函数是独立调用，那this指向undefined。但是在非严格模式中，当this指向undefined时，它会被自动指向全局对象
 * 		2、如果函数是被某一个对象调用，那this指向这个对象
 * 		注意：箭头函数根本没有自己的this，它的this就是外层代码块的this。它的this始终是固定的
 * 	3、构造函数与原型里的this
 * 		1、构造函数里的this指向实例
 * 		2、原型里的this指向实例
 */


{
    const obj = {
        a:10,
        c:this.a+20,
        fn:function(){
            return this.a;
        }
    }
    console.log(obj.c);//表示为NAN,此时this 指向window
    console.log(obj.fn());
}
{
    let a = 20;
    const obj = {
        a:10,
        getA:function(){
            return this.a;
        }
    };
    console.log(obj.getA());
    const test = obj.getA;
    console.log(test()); //undefined 因为let a = 20; 没有办法变量提升
}
