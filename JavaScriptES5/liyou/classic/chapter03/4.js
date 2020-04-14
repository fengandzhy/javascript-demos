
/**
 * for in 循环用来循环对象的
 * */
var obj = {
    name:'sam',
    age:18,
    height:180
}

for(var i in obj){
    console.log(i+' '+obj[i]);
}

var arr = [1,2,3];
for(var i in arr){
    console.log(arr[i]);
}


var str = 'abc';
for(var i in str){
    //console.log(str[i]);
    console.log(str.charAt(i));
}


// var i =0;
// var j = 0
// while(i <3){
//     while(j <3){
//         console.log(i+' '+j);
//         j++;
//     }
//     i++;
// }

//forEach循环只针对于数组
var array = [4,5,6];
array.forEach(function (value) {
    console.log(value);
});

