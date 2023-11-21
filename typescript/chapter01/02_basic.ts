// 可以先声明变量类型再复制
let v1: boolean;
v1 = true;

// 可以声明类型和赋值同时进行
let v2: string = 'abc';

// 可以不用显示地声明变量类型
let v3 = 'bcd';

// 函数的入参和返回值的声明
function sum1(a: number, b: number): number {
    return a + b;
}

console.log(sum1(1,3));

// 当返回值为string 时, 为了符合返回值这里用了''
function sum2(a: number, b: number): string {
    return a + b + '';
}

console.log(sum2(1,3));