
/**
 * 原型链继承 其实利用的就是这个原理，如下例所示,假设
 * var parent = new Parent();
 * 假设在parent中找一个属性a, 如果parent中没有，那么会去到Parent.prototype里面去找，同理
 * var child = new Child(); 对于child也是一样。
 * 但是如果让Child.prototype = parent;了之后，那么对于child来说，找一个属性a, 如果child里面没有就到parent里面找了，
 * 这不就是继承了吗？
 *
 * */
function Parent(){
    this.name = 'kevin';
}

//console.log(Parent.prototype);

Parent.prototype.getName = function(){
    console.log(this.name);
}

function Child(){

}

console.log(Child.prototype);

Child.prototype = new Parent();

console.log(Child.prototype);

var child = new Child();
var parent = new Parent();

console.log(child.name);
console.log(parent.name);
console.log(child instanceof Parent); //true;

/**
 * 
 * */
function Parent(){
    this.address = {
        city:'a',
        road:'b'
    }
}

Parent.prototype.getAddress = function(){
    return this.address;
}

function Child(){

}

Child.prototype = new Parent();

//Child.prototype = 'abc';

var child = new Child();
var child1 = new Child();

child.address.city='c';

console.log(child.getAddress().city);
console.log(child1.getAddress().city);

