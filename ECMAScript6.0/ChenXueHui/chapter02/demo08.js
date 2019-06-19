/**
 * ES6 函数reset参数
 * */

const add=(...nums)=>{
    let result =0;
    // nums.forEach(function(value,index,arr){
    //     result+=value;
    // });

    nums.forEach(value=>{result+=value});
    return result;
}
add(12,59);


/**
 * reset参数可以当成输入实参的数组
 * */
function sortArg(){
    console.log(arguments)
    const arr = [].slice.call(arguments);
    arr.sort(function(a,b){
        return a-b;
    });
    console.log(arr);
}
sortArg(1,-3,2,5,23);

const sortNum=(...nums)=>nums.sort((a,b)=>{return a-b});
console.log(sortNum(1,-3,2,5,23));

/**
 * 除a,b外另外的参数作为一个nums的数组，切记，...nums只能是最后一个参数
 * */
const fn=(a,b,...nums)=>{
    nums.forEach(value=>{
        console.log(value);
    });
}
fn(1,2,3,4,5,6,7);

/**
 * lenght属性不会计算reset
 * */
const fn1=(a,b,...num)=>{
    console.log(fn1.length);
}
fn1(1,2,3,4,5,6,7);
