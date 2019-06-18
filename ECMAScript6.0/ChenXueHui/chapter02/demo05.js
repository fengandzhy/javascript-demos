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
 * 关于箭头函数的this
 *
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
}

{
    const obj = {
        a: () => {
            console.log(this)
        }
    }
    obj.a()
}

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

