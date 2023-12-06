

function Person(){}
console.log(Person);
console.log(Person.__proto__);
console.log(Person.__proto__.__proto__);
console.log(Person instanceof Function); // true
console.log(Person instanceof Object);  // true
console.log(Person.__proto__ instanceof Function); // false Person.__proto__ 的 .__proto__ 不是 Function.prototype
console.log(Person.__proto__.__proto__ instanceof Object); // false Person.__proto__.__proto__ 没有 .__proto__ 了 它是所有对象的原形对象
console.log(Person.__proto__ === Function.prototype); // true;
console.log(Person.__proto__.__proto__ === Object.prototype); //true
console.log(Person.constructor === Function); //true
console.log(Person.__proto__.constructor === Object); //true
console.log(Person.__proto__.constructor === Function); // false
console.log(Person.__proto__.__proto__.constructor === Object); // true

console.log(typeof Person); // function
console.log(typeof Person.__proto__); // function
console.log(typeof Person.__proto__.__proto__); // function



