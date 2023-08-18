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