function b() {
    console.log(aaa,bbb); //undefined undefined 因为function bbb() {} 定义在块里面 对于块外面的就相当于 var bbb = function(){};
    var aaa = 329;
    var bbb = 455;
    console.log(aaa,bbb); //329,455
    {
        console.log(aaa,bbb); //329,function
        bbb = 333;
        console.log(aaa,bbb); //329,333
        function bbb(){}
        console.log(aaa,bbb); //329,333
        bbb = 321;
    }
    console.log(aaa,bbb); //321,function
}
b();

