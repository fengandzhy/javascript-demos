

function Person(){}
console.log(Person);
console.log(Person.__proto__);
console.log(Person.__proto__.__proto__);
console.log(Person instanceof Function); // true
console.log(Person instanceof Object);  // true
console.log(Person.__proto__ === Function.prototype); // true;
console.log(Person.__proto__.__proto__ === Object.prototype); //true
console.log(Person.constructor === Function); //true
console.log(Person.__proto__.constructor === Object); //false
console.log(Person.__proto__.constructor === Function); // false
console.log(Person.__proto__.__proto__.constructor === Object); // true





