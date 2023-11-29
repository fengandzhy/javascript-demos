
console.log(Function); // Function对象本身
console.log(Function.__proto__); // 所有函数的原形对象, 它的constructor属性是 Function对象本身
console.log(Function.__proto__.__proto__); // 所有对象的原形对象
console.log(Function.constructor === Function); // true