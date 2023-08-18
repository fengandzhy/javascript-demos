
/**
 * call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：
 * call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,'成都', ... ,'string' )。
 * apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,['成都', ..., 'string' ])。
 * bind 除了返回是函数以外，它 的参数和 call 一样。
 * 当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object 等等！
 *
 * */
var name = "小王",age=18;

var obj = {
    name: '小明',
    age:20,
    myFun:function(province,city){
        console.log( this.name + "年龄" + this.age +"，来自" + province + "省" + city +"市" ) ;
    }
}

var db = {
    name:"Yushia",
    age:18
}

obj.myFun.call(db,'福建','福州'); // Yushia年龄18，来自福建省福州市
obj.myFun.apply(db,['福建','福州']); // Yushia年龄18，来自福建省福州市
obj.myFun.bind(db,'福建','福州')(); // Yushia年龄18，来自福建省福州市
obj.myFun.bind(db,['福建','福州'])(); // Yushia年龄18，来自福建,福州省undefined市
