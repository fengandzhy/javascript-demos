
//就是一个累加器
var items = [10, 120, 1000];

// sumSoFar 是{sum: 0}，item是数组里面的
var reducer = function add(sumSoFar, item) {
    sumSoFar.sum = sumSoFar.sum + item;
    return sumSoFar;
};

// do the job
var total = items.reduce(reducer, {sum: 0});

console.log(total); // {sum:1130}





const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));

