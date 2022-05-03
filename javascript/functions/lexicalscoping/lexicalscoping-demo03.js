/**
 * 因为ES5没有块级作用域, 所以var m=2; 也是全局作用域里的它会把之前的 var m =1;给完全覆盖掉
 * 另外, 因为ES6有块级作用域, 所以const m=2; 无法覆盖掉外面的 const m=1; 于是这里输出1
 * */
var m=1;
function foo(){
    console.log(m);//2
}
try{
    var m=2;
    foo();
}catch(e){
    console.log(e)
}

const m=1;
function foo(){
    console.log(m);//1
}
try{
    const m=2;
    foo();
}catch(e){
    console.log(e)
}




