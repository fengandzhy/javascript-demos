

/**
 *
 * */
function Person() {
    this.age = 0;
    setTimeout(function() {
        console.log(this);
    }, 1000);  //1秒后返回 window 对象 这个函数是它自己调用的,所以非严格模式下指向window
}

var p = new Person();


function Person2() {
    this.age = 0;
    setTimeout((function() {
        console.log(this);
    }).bind(this), 1000); //1秒后返回构造函数新生成的对象 Person{age: 0} 这个函数虽然也是它自己调的, 但是绑定了this
}

var p = new Person2();
