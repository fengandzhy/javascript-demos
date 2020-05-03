
/**
 * 只有这里的constructor明确指定new Point(2,3) 这样构造对象才有效果
 * */
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
let point = new Point(2,3);
console.log(point);