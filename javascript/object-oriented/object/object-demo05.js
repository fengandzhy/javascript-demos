/**
 * set 和 get 是两个特殊标识
 * */

const source = {
    get foo() {
        console.log('getter is calling.');
        return 1;
    },
    set foo(val) {
        console.log('setter is calling.');
    }
}
console.log(source);
console.log(source.foo); // getter is calling.
source.foo = 3; // setter is calling.
