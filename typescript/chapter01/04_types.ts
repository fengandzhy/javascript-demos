

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





