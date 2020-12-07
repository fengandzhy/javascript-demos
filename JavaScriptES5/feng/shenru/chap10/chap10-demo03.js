/**
 * 模拟call当函数有返回值的时候
 * */
function bar(name,age){
    console.log(name);
    console.log(age);
    console.log(this.value);
    return {name:name,age:age,value:this.value};
};

var obj = {
    value:2
};

Function.prototype.call2 = function(context){
    var context = context || window;
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn('+args+')');
    delete context.fn;
    return result;
}

console.log(bar.call2(obj,'a',12));

