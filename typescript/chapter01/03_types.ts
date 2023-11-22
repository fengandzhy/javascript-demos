// 也可以直接使用字面量进行类型声明, 注意这里是声明不是赋值, 意思是这个变量只能有这一个值
let a1: 10;
console.log(a1); // undefined a 此时还没有被赋值
a1 = 10;
console.log(a1);

// 可以使用 | 来连接多个类型（联合类型）
let a2: "male" | "female";
a2 = "male";
a2 = "female";

// 这也是联合类型
let a3: boolean | string;
a3 = true;
a3 = 'hello';

// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d: any;

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let a4;
a4 = 10;
a4 = 'hello';
a4 = true;

// unknown 表示未知类型的值
let a5: unknown;
a5 = 10;
a5 = "hello";
a5 = true;

let a6: string;

// d的类型是any，它可以赋值给任意变量
a6 = a4;
console.log(a6);

a6 = 'hello';

// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if (typeof a6 === "string") {
    a5 = a6;
}
console.log('a5 is ' + a5);

// 类型断言，可以用来告诉解析器变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
*
* */
let a7: string = a5 as string;
a7 = <string>a5;
console.log('a7 is ' + a7);


// void 用来表示空，以函数为例，就表示没有返回值的函数
function a8(): void {
}

// never 表示永远不会返回结果
function a9(): never {
    throw new Error('报错了！');
}

// 返回值是联合类型的函数
function a10() : number | string {
    if(a2 === 'male'){
        return 3;
    }else{
        return '错啦';
    }
}

