setTimeout(function() {
    console.log('7');
},1000);
function aa() {
    var promise = new Promise(function(resolve, reject) {
        console.log('1');
        setTimeout(function() {
            console.log('2');
            setTimeout(function(){
                console.log('8');
            },0);
            //resolve('want-value');
            console.log('6');
        },1000);
    });
    console.log('3');
    return promise;
}
console.log('begin');
aa().then(function(done){
    console.log('4');
    console.log(done);
});

setTimeout(function() {
    console.log('5');
},3000);