
/**
 *  const me = Object.create(person); 将person对象放到了me的原型对象上去
 * */
const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);
console.log(me);
console.log(person);