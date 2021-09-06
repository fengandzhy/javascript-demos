/**
 * 1. 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
 *  就是说元组的各元素的类型可以不一样这点跟数组是完全两样的.
 *  打个比方说let a:[string,number]; 对于a 这个元组来说, 第一个元素必须是string, 第二个元素必须就是number, 其余随意
 *
 *
 *
 * */
{
    let a:[string,number];
    a = ['a',2];
    a.push('b');
    a.push(3);
    let b:number = 5;
    a.push(b);
    console.log(a);

}
