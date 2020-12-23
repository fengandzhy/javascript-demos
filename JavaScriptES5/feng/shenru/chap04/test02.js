var a =20;
if(true){
    a = 10;
    console.log(window.a===a);
    function a(){}
    console.log(window.a===a);
}
