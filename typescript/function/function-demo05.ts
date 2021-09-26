/**
 * 1. type Combinable = string | number; 将 Combinable 代表为string 和 number类型
 *
 * 2. 这就是重载的例子, 前面4个add就是定义了4种add每个add有不同的参数,后面底5个add才定义了函数体
 * 另外在调用这个的时候add('Semlinker', ' Kakuqo')调用的是第二个add
 *
 * 3.对于disp函数来说,它可以有两种形式, 第一种参数为string 只有一个参数, 第二种第一个参数为number, 第二个参数为number
 * 对于disp("abc");来说它调用的是第一个disp, 对于 disp(1,"xyz") 它调用的是第二个disp
 *
 * 4. 对于重载来讲,他们的函数体是相同的 例如下例中add 和 disp 它们共用一个函数体
 *
 *
 *
 * */
{
    type Combinable = string | number;
    function add(a: number, b: number): number;
    function add(a: string, b: string): string;
    function add(a: string, b: number): string;
    function add(a: number, b: string): string;
    function add(a: Combinable, b: Combinable) :Combinable {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }

    const result = add('Semlinker', ' Kakuqo');
    console.log(result);
    console.log(result.split(' '));


    function disp(s1:string):void;
    function disp(n1:number,s1:string):void;
    function disp(x:Combinable,y?:Combinable):void {
        console.log(x);
        console.log(y);
    }
    disp("abc");
    disp(1,"xyz");
}