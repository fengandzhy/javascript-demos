/**
 * 1. arr.map()
 * 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的新数组
 *
 * */
var nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var arr = nums.map((item, index, arr)=> {
    if(index%2==0){
        item = item * 2;
    }
    return item;
} );
console.log(arr);

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Albert1', last: 'Einstein2', year: 1873, passed: 1958 },
    { first: 'Albert2', last: 'Einstein1', year: 1872, passed: 1955 },
    { first: 'Hanna', last: 'Hammarström', year: 1529, passed: 1909 }
];

//const fullnames = inventors.map(inventor => `${inventor.first} ${inventor.last}`); //这个`${是占位符的意思
const fullnames = inventors.map(inventor => {
    return inventor.first+" "+inventor.last;
});
console.log(fullnames);