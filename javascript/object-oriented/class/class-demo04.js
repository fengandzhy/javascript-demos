class Foo {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    static bar() {
        this.baz();
    }
    static baz() {
        console.log('hello');
    }
    baz() {
        console.log('world');
    }
    set age (val) {
        console.log('set', val)
    }
    get age () {
        console.log('get')
        return '456';
    }
}
Foo.bar();
let foo = new Foo(1,2);
foo.baz();
console.log(foo);


class Bar extends Foo {
}
let bar = new Bar(1,3);
bar.baz(); //world
Bar.baz(); // hello
console.log(bar);
