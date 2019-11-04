var a = false;
console.log(a);
console.log(!a);

if(!a){
    console.log('aaaaaaaaaaa');
}

var data = {};
data.a=true;

if(data.a){
   console.log('aaaaaaaaaaaaaaaaabbbb');
}


var a = 0;
debugger;
console.log(a === null);
console.log(a === undefined);
console.log(a === '');
if (a === null || a === undefined || a === '') {
    console.log(a);
}

