/**
 * 箭头函数
 * */

/**
 * 声明一个箭头函数
 * */

{
    const fn = ()=>{
        console.log("I am an arrow function");
    }
    fn();
}

/**
 * 箭头函数传参,带返回值
 * */
{
    const fn=(a,b)=>{
        console.log(a,b);
    }
    fn('a','b');

    const fn2 = a=>{
        console.log(a);
    }
    fn2('abc')

    //传一个参数,函数体只有一条语句
    const fn3=a=>console.log(a);
    fn3('def')

    const fn4=()=>{
        return {a:10,b:20}
    }
    fn4();
}
/**
 * 箭头函数自执行
 * */
{
    (v=>{
        console.log(v);
    })('abc')
}


/**
 * 关于箭头函数的this,箭头函数没有this，在箭头函数里的this 绑定的就是最近一层非箭头函数的 this
 *
 * 例如在show4里面的this, 它最近一层的非箭头函数是show3, 所以show4里面的this的指向，就相当于调用show3时，show3里面的this指向
 * 所以，执行dog.show3(); 如果show3里面有this，此时指向的就是dog，所以show3里面的箭头函数show4的this也就指向dog
 * 在打个比方，如果
 * var test = dog.show3;
 * test();
 * 如果show3里面有this，此时指向的就是undefined(非严格模式下是window)，所以所以show3里面的箭头函数show4的this也就指向window
 *
 * 例如在show2里面的this,show2外层没有箭头函数，它里面的this就是父级作用域里的this, show2的父级作用域是谁？好像是个块级作用域？还是全局作用域?
 * anyway，不管是块级作用域还是全局作用域里面的this指向的都是window
 *
 * */
{
    const dog = {
        color:'yellow',
        show1:function(){
            console.log(this.color);
        },
        show2:()=>{
            console.log(this);
            console.log(this.color);
        },
        show3:function(){
           const show4=()=>{
               console.log(this);
           }
           show4();
        }
    }
    dog.show1();
    dog.show2();
    dog.show3();
    var test = dog.show3;
    test();
}

/**
 * 同理这里的this指向的是window，是箭头函数a父级作用域里面的this指向，a的父级作用域是块级作用域，里面的this指向window
 * 在浏览器console中运行下面代码,显示输出window
 * {console.log(this)}
 * */
{
    const obj = {
        a: () => {
            console.log(this)
        }
    }
    obj.a()
}

/**
 * 与上同理，箭头函数fn里的this是其父级作用域里的this,其父级作用域是getAge函数，所以运行obj.getAge()时fn里面的this指向就跟
 * 运行obj.getAge()时getAge里面的this指向一致，所以是1990
 * */
{
    var obj = {
        birth: 1990,
        getAge: function () {
            var b = this.birth; // 1990
            var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
            return fn();
        }
    };
    console.log(obj.getAge);
    obj.getAge();
    //var test = obj.getAge;
    //test();
}

