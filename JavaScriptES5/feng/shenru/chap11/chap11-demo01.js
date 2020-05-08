Function.prototype.bind2 = function(context){
    var self = this;
    return function(){
        return self.apply(context);
    }
}

var foo = {
    value: 1
};

function bar() {
    return this.value;
}

var bindFoo = bar.bind2(foo);

console.log(bindFoo());


