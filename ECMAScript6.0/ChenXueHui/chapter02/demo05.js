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
 * 关于箭头函数的this,箭头函数没有this，在箭头函数里的this 绑定的就是最近一层作用域非箭头函数的 this
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

/**
 * const obj = url => new Object(); 等同于 const obj = url => { return new Object();}
 * 它并不等同于 const obj = url => { new Object();}
 * */
{
    const obj = url => new Object();

    console.log(obj('url'));
}

/**
 * 那么这里面该如何判断箭头函数的this指向呢？首先要明白一点哦，这个箭头函数()=>this.sayThis() 最近的一层非箭头函数是哪个？
 * 究竟是exec1 函数的作用域还是render 函数的作用域呢？首先()=>this.sayThis() 作为一个实参传入了exec1, 那么它是在哪里定义的呢？
 * 首先它肯定是在render里面定义的 exec1(()=>this.sayThis()); 说白了就相当于 const a = ()=>this.sayThis(); exec1(a);
 * 所以这个函数的外层作用域自然就是 render函数 同理那么箭头函数()=>this.sayThis(); 就相当于调用render时 render的this指向
 * 所以呢，如果当jerry.render(); 调用的话，this自然指向的是 jerry, 而const fn1 = jerry.render; fn1();  调用的话this指向的是 window 报错
 * ()=>this.sayThis() 这个函数的意思就是在它的函数体里面只有一条语句,那就是执行this.sayThis() 所以此时在 cb(); 执行的时候就要看这个this指向在哪里的
 * */
const jerry = {
    sayThis: function () {
        console.log(this); // 这里的 `this` 指向谁？
    },

    exec: function (cb) {
        console.log(this);
        cb();
    },

    render: function () {
        const exec1 = this.exec;
        exec1(()=>this.sayThis());
    },
}
jerry.render();


/**
 * 这样调用报错 const cb = ()=>this.sayThis(); 里面的额this指的是exec里面的this 此时这么调用exec1();里面的this指向window
 * 所以报错。
 * */
const jerry = {
    sayThis: function () {
        console.log(this); //
    },

    exec: function () {
        console.log(this);
        const cb = ()=>this.sayThis();
        cb();
    },

    render: function () {
        //debugger;
        const exec1 = this.exec;
        exec1();
    },
}
jerry.render();



const jerry = {
    sayThis: function () {
        console.log('sayThis:'+this); // window
    },

    exec: function (cb) {
        console.log('exec:'+this); //window
        cb()();
    },

    render: function () {
        const exec1 = this.exec;
        exec1(()=>{return this.sayThis});
    },
}
jerry.render();