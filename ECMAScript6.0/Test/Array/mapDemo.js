var numbers = [4, 9, 16, 25];

/**
 * currentValue	必须。当前元素的值
 * index	可选。当前元素的索引值
 * arr	可选。当前元素属于的数组对象
 * */
numbers.map(function (currentValue,index,arr){

    console.log(currentValue);
    console.log(index);
    console.log(arr);

});


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Albert1', last: 'Einstein2', year: 1873, passed: 1958 },
    { first: 'Albert2', last: 'Einstein1', year: 1872, passed: 1955 },
    { first: 'Hanna', last: 'Hammarström', year: 1529, passed: 1909 }
];

//const fullnames = inventors.map(inventor => `${inventor.first} ${inventor.last}`); //这个`${是占位符的意思
const fullnames = inventors.map(inventor => inventor.first+" "+inventor.last);
console.log(fullnames);

