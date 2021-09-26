/**
 * 1.function greet():string{ 这里的string就是返回值的类型
 *
 * 2. 只有返回值为void的函数才能被new, 例如new greet()这就是不行的new call()就ok
 *
 *
 * */
{

    function greet():string{
        return "Hello world!";
    }

    function call(){
        let msg:string = greet();
        console.log(msg);
    }

    call();

    let a:object = new call();

}