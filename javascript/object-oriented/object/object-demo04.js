/**
 * Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象source复制到目标对象。它将返回目标对象target。
 * Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
 *
 * */
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source)
console.log(target === returnedTarget); //true

/**
 * 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
 * */
const target = { a: 1, b: 1 };
const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target);


/**
 * 如果只有一个参数，Object.assign会直接返回该参数。如果该参数不是对象，则会先转成对象，然后返回。
 * */
const obj = {a: 1};
const o1 = Object.assign(obj) // {a: 1}
console.log(o1 === obj);
const o2 = Object.assign(2);
console.log(o2);

/**
 * 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
 * */
Object.assign(undefined); // 报错
Object.assign(null); // 报错

/**
 * 如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。
 * 首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错。
 * */
let obj = {a: 1};
console.log(Object.assign(obj, undefined) === obj); // true
console.log(Object.assign(obj, null) === obj); // true

/**
 * 其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。
 * 但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
 * */
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const obj = Object.assign({}, v1, v2, v3)
console.log(obj); // { "0": "a", "1": "b", "2": "c" }


console.log(Object.assign(true)); // {[[PrimitiveValue]]: true}
console.log(Object.assign(10));  //  {[[PrimitiveValue]]: 10}
console.log(Object.assign('abc')); // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}


const o1 = Object.assign(10);
console.log(o1);
console.log(o1.length); //undefined
Array.isArray(Object.keys(o1)); //true

const o2 = Object.assign('abc');
console.log(o2);
console.log(o2.length); //3
Object.keys(o2);


/**
 * Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）
 * */
console.log(Object.assign({b: 'c'},
    Object.defineProperty({}, 'invisible', {
        enumerable: false,
        value: 'hello'
    })
));

/**
 * Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
 * */
const obj1 = {a: {b: 1}};
const obj2 = Object.assign({}, obj1);
console.log(obj2);

/**
 * Object.assign把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1
 * */
const arr = Object.assign([1, 2, 3], [4, 5]);
console.log(arr);

const source = {
    get foo() { return 1; }
}
console.log(source.foo);
const target = {}
console.log(Object.assign(target, source));


