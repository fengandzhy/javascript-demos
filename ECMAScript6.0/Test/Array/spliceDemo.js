/**
 * splice方法
 * fruits.splice(0,0,"Lemon","Kiwi"); 这个意思是，从furits数组的第0个元素开始，往后第0个元素用"Lemon","Kiwi" 代替
 * 同理fruits.splice(2,1,"Lemon","Kiwi") 意思是，从furits数组的第2个元素开始，往后第1个元素用"Lemon","Kiwi" 代替
 *
 * */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0,0,"Lemon","Kiwi");
console.log(fruits);


var array = [];
console.log(typeof array);
console.log(typeof {});


/**
 * 删除数组元素
 * */
var emp = ['abs','dsf','sdf','fd'];
emp.splice(1,1);
console.log(emp);

var emp = ['abs','dsf','sdf','fd'];
for(var i=0;i<emp.length;i++){
    if(i==1){
        emp.splice(1,1);
    }
}
console.log(emp);




/**
 * 删除数组元素
 * */
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

var emp = ['abs','dsf','sdf','fd'];

emp.remove('fd');


console.log(emp);


