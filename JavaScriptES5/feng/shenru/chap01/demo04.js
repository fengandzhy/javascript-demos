/**
 * 当访问一个实例的属性时，例如本例中person.name，
 * 它首先回去当前实例中找这个属性的值，如果没有值，它就会去找原型的同名属性的值，
 * 因为该实例它继承了原型实例的属性.
 * */

function Person() {
}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin