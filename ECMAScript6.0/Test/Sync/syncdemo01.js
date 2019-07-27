function f1(callback){

    setTimeout(function () {

        // f1的任务代码
        //console.log('This is f1');

        callback();

    }, 1000);
}

function f2(){
    console.log('This is f2');
}

f1(f2);