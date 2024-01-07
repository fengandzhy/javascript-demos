

let b1: {name:string} = {name:'孙猴子'};

/**
 * ? 表示该属性可选
 * */
let b2 : {name:string, age?:number};
b2 = {name:'孙悟空', age: 12};
b2 = {name: '孙猴子'};

let b3 : {name:string, obj:{name:string, type:string}};
b3 = {name:'孙猴子', obj:{name:'金箍棒',type:'定海神针'}};
console.log(b3);

/**
 * [propName: string] 表示任意属性名, 由于属性名永远都是string, 所以这里只能选择string
 * [propName: string]: any 任意多的属性, 任意的属性名, 任意的类型
 * */
let b4: {name: string, [propName: string]: any}; // 它除了有个name 是string 之外, 其余的, 随便
b4 = {name: '猪八戒', age: 18, gender: '男'};

let b10: {name: string, [propName: number]: any}; // 这里的属性名也可以是number类型的
b10 = {name: '猪八戒', 4: 18, 3: '男'};
/**
 * 定义b5 为一个函数类型, 该函数有两个number的参数, 然后有一个number类型的返回值,
 * 具体语法：(形参:类型, 形参:类型 ...) => 返回值
 * */
let b5: (a:number,b:number) => number;

// 给该函数具体赋值
b5 = (c:number,d:number) : number =>{
    return c + d;
};

/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
let b6:number[];
b6 = [1,2,3];
console.log(b6);

let b7:Array<object>;
b7 = [{a:1},function b(){},[1,2,3]];
b7.push({a:8});
console.log(b7);

/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */
let b8: [string, number];
b8 = ['hello', 123]; // 元祖的意思就是这个数组在这里赋值的时候不能多加元素了
b8.push('b');
console.log(b8); // 跟数组一样它是可以push 的


/**
 * 枚举
 * */
enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
}
let b9: Color = Color.Green;
console.log(b9);


enum Gender {
    Male = 1,
    Female = 0
}

// 这里定义枚举类型
let b11: {name:string, gender:Gender};
b11 = {
  name:'孙悟空',
  gender: Gender.Female
}

