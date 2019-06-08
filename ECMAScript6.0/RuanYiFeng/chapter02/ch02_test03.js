/**函数解构赋值*/

/**以下是一个数组掉一个map函数,输出一个新数组是输入数组各个元素的和*/
[[1, 2], [3, 4]].map(([a, b]) => a + b);

function move({x = 0, y = 0} = {}) {
    return [x, y];
}

console.log(move({x: 3, y: 8})); // [3, 8]
console.log(move({x: 3})); // [3, 0]
console.log(move({})); // [0, 0]
console.log(move()); // [0, 0]

/**利用数组解构赋值函数可以返回多个值*/
function example() {
    return [1, 2, 3];
}
let [a, b, c] = example();

/**利用数组解构赋值函数可以输入多个值*/
function f([x, y, z]) {

}
f([1, 2, 3]);

/**利用对象解构赋值函数可以返回一个对象*/
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
let { foo, bar } = example();

/**利用对象解构赋值函数可以输入一个对象*/
function f({x, y, z}) {}
f({z: 3, y: 2, x: 1});


/**提取jason*/
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);

