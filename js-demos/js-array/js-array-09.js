


var arr = [11, 22, 33, 44, 55];
arr.forEach(function(x, index, a){
    console.log(x + '|' + index + '|' + (a === arr));
});

// 输出为：
//
// 11|0|true
// 22|1|true
// 33|2|true
// 44|3|true
// 55|4|true



