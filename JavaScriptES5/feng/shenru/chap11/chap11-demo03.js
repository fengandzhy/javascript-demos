/**
 * 手写bind函数一定要搞清楚这样两个变量,一个是外面函数的那个this,另外一个就是里面函数的那个this
 *
 *
 * */
Function.prototype.bind2 = function(context){

    if(typeof this !== 'function'){
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments,1);

    var fNOP = function () {};

    //fBond返回之后,如果是被new出来的这里的this一定是fNOP 的对象
    var fBond = function(){
        var agrs2 = Array.prototype.slice.call(arguments,0);
        return self.apply(this instanceof fNOP ? this : context, args.concat(agrs2));
    }

    fNOP.prototype = this.prototype;
    fBond.prototype =new fNOP();
    return fBond();

}

