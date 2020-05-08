Function.prototype.bind2 = function(context){
    var self = this;
    var args = Array.prototype.slice.call(arguments,1);
    return function (){
        var args2 =  Array.prototype.slice.call(arguments);
        return self.apply(context,args.concat(args2));
    }
}

var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}

var bindFoo = bar.bind2(foo, 'daisy');
bindFoo('18');

