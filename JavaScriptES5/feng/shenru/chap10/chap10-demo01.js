
/**
 * 模拟call的实现
 *
 * */
Function.prototype.call2 = function(context){
    context.fn = this; //因为是bar调用的call2 所以这里的this就是指的bar
    context.fn(); //由于第一步context.fn 指向了bar所以这里的执行就相当于在执行bar这个函数,但它是context.fn来调用的函数里面的this自然指向context
    delete context.fn;
}

var obj = {
    value:1
}

function bar(){
    console.log(this.value);
}
bar.call2(obj);



/**
 * 考虑到了后面的函数问题
 * */
Function.prototype.call2 = function(context) {
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args +')');
    //context.fn(args.join(','))
    delete context.fn;
}

var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.call2(foo, 'kevin', 18);

// var args = [];
// args.push('a');
// args.push(2);
//
// console.log(args.join(','));





