
(function () {
    var tmp = 3;
})();


function f() { console.log('I am outside!'); }

(function () {
    if (true) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }

    f();
}());

var a = 0;
if(true){
    a = 1;
    function a (){}
    a = 21;
    console.log(a);
}
console.log(a);

