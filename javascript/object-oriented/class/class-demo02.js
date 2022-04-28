/**
 * 1. constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
 * 2. 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
 *
 *
 * */

class Point{
    constructor(x,y){
        console.log('I was called!');
        this.x = x;
        this.y = y;
    }
}
let point = new Point(2,3);
console.log(point);

let p = new Point();
console.log(p);
