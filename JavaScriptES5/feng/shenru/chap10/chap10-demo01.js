
/**
 *
 * */
Function.prototype.call2 = function(context) {
    console.log(context);
    console.log(this);
    context.fn = this;//这里的this指向的是bar
    context.fn();//当这么调用时，bar里的this指向了foo
    delete context.fn;
}

// 测试一下
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call2(foo); // 1





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

var args = [];
args.push('a');
args.push(2);

console.log(args.join(','));





