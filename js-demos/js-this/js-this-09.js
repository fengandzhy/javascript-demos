
/**
 * 因为闭包并不属于这个对象的属性或方法。所以在闭包中的this是指向window.
 * 闭包中的this指向的是window对象，this.name=window.name
 * obj.say().call(obj)  这里通过call方法把this的指向换成了obj
 * 在方法内部改变this指向,对象中的say方法中this是指向obj，使用that代替this，在闭包函数中写成that.name 那么结果指向obj
 *
 *
 * */
var name = "window";

var obj = {
    name: "Yushia",
    say:function(){
        var that = this;
        console.log(this.name);
        return function(){
            console.log(this.name);
            console.log(that.name);
        }
    }
}
obj.say()();  // Yushia window  Yushia
obj.say().call(obj);  // Yushia Yushia  Yushia
