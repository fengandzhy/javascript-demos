/**
 * 1. 在typescript中定义array有两个方式
 *  let arr:number[] = [1,2];
 *  let arr2:Array<String>;
 *
 * 2. 在typescript中数组长度是可以变化的, 但是数组的类型就不能变化,例如定义了一个number类型的数组, 就不能加入string
 *
 * */
{
    let arr:number[] = [1,2];
    console.log(arr);
    arr = [3,4,5];
    console.log(arr);

    let arr1 = [3,4,5];
    console.log(typeof arr1); //object

    let arr2:Array<String>;
    arr2 = ['a','b','c'];
    arr2.push('d');
    console.log(arr2);
    // arr2.push(3);

    const arr3:number[] = new Array();
    arr3.push(1);
    arr3.push(2);
    arr3.push(3);
    console.log(arr3);
}
