/**
 * 1. 注意这种定义变量的方式
 *  let 变量名:类型
 *
 * 2. 如果是const 不能用 const 变量名:类型, 应该直接const 变量名=值
 *
 * 3. 在js文件当中变量类型不严格, 例如如下代码 可行分别输出number和string 但是在typescript中这样就会报错.
 *  a已经被赋值成了'12'它是string类型的bunegn zai 赋值一个 number
 *      let a = '12';
 *      console.log(typeof a);
 *      a = 3;
 *      console.log(typeof a);
 *
 * */

{
    let binaryLiteral: number = 0b1010; // 二进制
    let octalLiteral: number = 0o744;    // 八进制
    let decLiteral: number = 6;    // 十进制
    let hexLiteral: number = 0xf00d;    // 十六进制
    console.log(binaryLiteral);
    console.log(octalLiteral);
    console.log(decLiteral);
    console.log(hexLiteral);

    let a:number;
    a = 123;

    const b = 12;
    console.log(typeof b);

    const c = '12';
    console.log(typeof c);


}




