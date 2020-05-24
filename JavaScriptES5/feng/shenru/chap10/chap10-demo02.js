

function bar(name,age){
    console.log(name);
    console.log(age);
    console.log(this.value);
};

var obj = {
    value:2
};

Function.prototype.call2 = function(context){
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn('+args+')');
    delete context.fn;
}

bar.call2(obj,'Tom',15);


