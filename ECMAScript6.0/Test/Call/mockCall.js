
function fn1(name,age){
    console.log(name+","+age);
    console.log(this.value);
}

var obj = {
    value:2
}

Function.prototype.call2 = function(context){
    context.fn = this;
    var args = [];

    for(var i=1;i<arguments.length;i++){
        args.push('arguments['+i+']');

    }

    var result = eval('context.fn('+args+')');
    delete context.fn;
    return result;
}

fn1.call2(obj,'Sam',18);

