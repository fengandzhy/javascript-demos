

console.log((2) === new Number(2)); // false
console.log((2) instanceof Number); // false
console.log((2).__proto__ === Number.prototype); // true


const v1 = Object.prototype.toString.call((2));
const v2 = Object.prototype.toString.call(new Number(2));

console.log(v1);
console.log(v2);
console.log(v1 == v2);
console.log(v1 === v2);

