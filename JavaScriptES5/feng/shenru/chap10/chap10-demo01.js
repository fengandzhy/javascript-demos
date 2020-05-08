
/**
 *
 * */
Function.prototype.call2 = function(context){
    context.fn = this; //因为是bar调用的call2 所以this指向bar
    context.fn();
    delete context.fn;
}

var obj = {
    value:1
}

function bar(){
    console.log(this.value);
}
bar.call2(obj);




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





