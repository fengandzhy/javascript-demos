/**
 * 1. arr.forEach()
 * 对数组中的每一项运行给定函数，这个方法没有返回值,也不改变原数组
 *
 * */
// var nums = [1,2,3,4,5,4,3,2,1];
// nums.forEach((item, index, arr)=> item * 2 );
//
// nums.forEach((item, index, arr)=> {
//     if(index == 3){
//         return;
//     }
//     console.log(item);
// } );

let array1 = [1,2,3];
let array2 = [1,2];
let array3 = [];
array1.forEach((item) => {
    let index = 0;
    while (index < array2.length){
        if(item === array2[index]){
            break;
        }
        index ++;
    }
    if(index === array2.length){
        array3.push(item);
    }
});
console.log(array3);

