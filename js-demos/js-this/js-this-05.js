

/**
 * 如果构造函数显式的返回一个对象，那么 this 则会指向该返回对象。
 * */
function Person(n, a){
    this.name = n;
    this.age = a;
    return {
        name: "Lucy",
    };
}

var obj = new Person("Yushia", 18);
console.log(obj.name);  // Lucy  如果构造函数显式的返回一个对象，那么 this 则会指向该对象。
console.log(obj.age);   // undefined

