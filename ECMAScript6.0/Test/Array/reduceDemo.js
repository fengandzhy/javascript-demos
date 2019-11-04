
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