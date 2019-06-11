var foo = new Function();
function woo() { }
var fooObj = new foo()
var wooObj = new woo()
console.log("对象")
console.dir(Function.__proto__)
console.dir(foo.__proto__)
console.dir(woo.__proto__)
console.dir(fooObj instanceof foo)
console.dir(wooObj instanceof woo)
console.dir(foo instanceof Function)
console.dir(woo instanceof Function)
console.dir(Function instanceof Function)
console.log("函数")
console.dir(Function.prototype)
console.dir(foo.prototype)
console.dir(woo.prototype)


