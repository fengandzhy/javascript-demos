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
 * 箭头函数自执行, 外边的块可以不用
 *
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
 * 如果变成自执行函数, 由于这个自执行函数里面的this就是指向window的, 因为自执行函数类似于这样调用的fn(), 就相当于window在调用这个函数
 * */
;(function(window,undefined){
   window.dog= {
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
       console.log(this);
})(window);

dog.show1();
dog.show2();
dog.show3();
var test = dog.show3;
test();

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
 * 那么这里面该如何判断箭头函数的this指向呢？首先要明白一点哦，这个箭头函数()=>this.sayThis() 最近的一层非箭头函数的作用域是哪个？
 * 究竟是exec1 函数的作用域还是render 函数的作用域呢？首先()=>this.sayThis() 作为一个实参传入了exec1, 那么它是在哪里定义的呢？
 * 首先它肯定是在render里面定义的 exec1(()=>this.sayThis()); 说白了就相当于 const a = ()=>this.sayThis(); exec1(a);
 * 所以这个函数的外层作用域自然就是 render函数 同理那么箭头函数()=>this.sayThis(); 就相当于调用render时 render的this指向
 * 所以呢，如果当jerry.render(); 调用的话，this自然指向的是 jerry, 而const fn1 = jerry.render; fn1();  调用的话this指向的是 window 报错
 * ()=>this.sayThis() 这个函数的意思就是在它的函数体里面只有一条语句,那就是执行this.sayThis() 所以此时在 cb(); 执行的时候就要看这个this指向在哪里的
 *
 *
 * 就跟上面分析的那样,箭头函数的最近一层非箭头函数的作用域是render 函数的作用域, 那么此刻在这个箭头函数里的this指向的是跟render 函数里的this指向是一样的
 * 而调用render的方式是jerry.render(); 所以这里的this始终指向jerry. 跟这个箭头函数是怎么调用的无关, 该箭头函数的调用方式是cb(); 尽管是直接调用的
 * 但是不影响里面this的指向
 * 而exec 里面的this 它是由调用exec的方式决定的 而在这个例子里exec的调用的方式是 exec1() 直接调用的, 所以里面的this指向window
 * 对于sayThis 里面的this sayThis它不是箭头函数, 它的调用方式是箭头函数里的this.sayThis(); 而箭头函数里的 this 指向的是jerry 所以, 同理了.
 *
 * */
const jerry = {
    sayThis: function () {
        console.log('sayThis fun ');
        console.log(this); // jerry
    },

    exec: function (cb) {
        console.log('exec fun ');
        console.log(this); //window
        cb();
    },

    render: function () {
        const exec1 = this.exec;
        exec1(()=>{
            console.log('array fun ');
            console.log(this); // jerry
            this.sayThis()});
    },
}
jerry.render();

/**
 * 如果把箭头函数 改成一般的函数这里就错了, 因为这个函数(就是传入exec1的函数)的调用的方式是cb();
 * 那么该函数里面的this 指向的是window 所以调用this.sayThis(); 的时候报错
 *
 * */
const jerry = {
    sayThis: function () {
        console.log('sayThis fun ');
        console.log(this); // jerry
    },

    exec: function (cb) {
        console.log('exec fun ');
        console.log(this); //jerry
        cb();
    },

    render: function () {
        const exec1 = this.exec;
        exec1(function(){
            console.log('array fun ');
            console.log(this); // window
            this.sayThis();
        });
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