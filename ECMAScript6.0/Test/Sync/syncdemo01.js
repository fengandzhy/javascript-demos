
console.log('This ia 1');
async function a() {
    sleep(1000);
    console.log('This is a');
}
a();
console.log('This ia 2');


function sleep(n) {
    var start = new Date().getTime();
    //  console.log('休眠前：' + start);
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
}

