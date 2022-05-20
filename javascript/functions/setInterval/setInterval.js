
setTimeout((a,b) => {
    console.log(a);
    console.log(b);
},1000,'a','b');

const t = setInterval((a,b) => {
    console.log(a);
    console.log(b);
},1000,'c','d');

setTimeout(()=>{
    clearInterval(t);
}, 5500);

function fn(a,b){
   console.log(a+b);
}
setTimeout(fn,600,2,6);

setTimeout(fn(2,6),600);

const a = new Array();
console.log(typeof a );