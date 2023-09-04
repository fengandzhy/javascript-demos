function f() { console.log('I am outside!'); }

(function () {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }

    f();
}());

function person () {
    var age = 18;
    function cat () { // age变量和cat函数就组成了一个[闭包]
        age++;
        console.log(age);
    }
    return cat(); // 如果不 return，你就无法使用这个闭包，主要是为了让外面可以访问到这个cat函数。把 return cat改成 window.cat = cat 也是一样的
}
var per = person; // per相当于函数cat
per(); // 19. 即cat()，这样每次调用不再经过age的初始值，而是去执行自增函数，这样就可以一直增加了
per(); // 20
per(); // 21