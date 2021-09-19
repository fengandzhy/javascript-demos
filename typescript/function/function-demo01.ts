/**
 * 1. typescript 是可以创建对象的 let a = new test(); 或者 let b:object = new test();
 * 它绝对不能这样创建对象 let a:test = new test(); 因为没有test类型
 * 
 * */
function test(){
    console.log('函数调用!');
}
test();

let a = new test();
console.log(typeof a);

let b:object = new test();
console.log(b);