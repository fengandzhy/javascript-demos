

/**
 * 构造函数的返回值如果是基本数据类型，那返回值和得到的对象无关
 * */
function Person(n, a){
    this.name = n;
    this.age = a;
    return  "Lucy"; //返回一个数据类型
}

var obj = new Person("Yushia", 18);
console.log(obj.name);  // Yushia
console.log(obj.age);   // 18
