class Person {
    constructor (name) {
        this.name = name
    }
    set age (val) {
        console.log('set', val)
    }
    get age () {
        console.log('get')
        return '456';
    }
    hi () {
        console.log('hi,man')
    }
}
let p = new Person('abc');
console.log(p);
p.hi();

function Person(name){
    this.name = name;
    this.hi = function () {
        console.log('hi,man');
    }
}
console.log(typeof Person);
console.log(Person.a);
let p = new Person('abc');
console.log(p);