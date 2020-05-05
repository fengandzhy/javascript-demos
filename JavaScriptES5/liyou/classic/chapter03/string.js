
var a = 'abcdefgadbc';
console.log(a.charAt(1));

console.log(a.indexOf('d'));

console.log(a.indexOf('d',4));//从4位开始找

console.log(a.lastIndexOf('d'));

console.log(a.substring(0,2)); //从0到2 不包括2

console.log(a.substring(2)); //从2开始一直到结束

console.log(a.slice(0,2)); //字符串截取，唯一的区别是不支持反向截取

console.log(a.slice(2,0)); //返回空，跟substring 不一样

console.log(a.substr(2,1)); //返回c 第一个参数是从哪一位开始，第二个参数是往后截几位

var str = "1234567890";
console.log(str.slice(2,-5)); //字符串长度是为10加上-5就相当于str.slice(2,5)


var b = 'abc';
var c = 'def';

console.log(b.concat(c)); //abcdef



var a = 'abcdef';

console.log(a.split(''));//变成一个数组

console.log(a.toUpperCase());

console.log(a.toUpperCase().toLowerCase());

var a = 'abcdefaa';
console.log(a.replace('a','b'));
//console.log(a.replaceAll('a','b'));没有replaceAll方法

var a = 'abcdefaa';
function fn1(str,a,b){
    if(str.indexOf(a)!=-1){
        str = str.replace(a,b); //replace 重新生成了一个字符串
        fn1(str,a,b);
    }
}
fn1(a,'a','b');
console.log(a);

