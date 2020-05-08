
Function.prototype.apply2 = function(context,arr){
    var context = context || window;
    var result;
    context.fn = this;
    if(!arr){
        result = context.fn();
    }else{
        var args = [];
        for(var i = 0, len = arr.length; i < len; i++) {
            args.push('arr['+i+']');
        }
        result = eval('context.fn('+args+')');

    }
    delete context.fn;
    return result;
}

function bar(name,age){
    console.log(name);
    console.log(age);
    console.log(this.value);
    return {name:name,age:age,value:this.value};
};

var obj = {
    value:2
};

console.log(bar.apply2(obj,['a',12]));

