
/**
 * 只执行一遍的定时器，定时器永远只放在最后执行
 *
 * setTimeout：在指定的毫秒数后，将定时任务处理的函数添加到执行队列的队尾。
 *
 * 意思是100毫秒后将function(){console.log()} 放到执行队列里，至于什么时候执行，得等到js 有空的时候
 * */
setTimeout(function () {
    console.log("abc");
},100);



/**
 * 输出10遍10,console.log(i)是要等主程序执行完成之后再执行的，0的意思是0秒后将setTimeout里面的函数加入执行队列，具体的等到主程序运行完了之后再运行.
 * 而当主程序运行完了之后i已经变成了10
 *
 * */
for(var i=0;i<10;i++){
    setTimeout(function() {
        console.log(i);
    }, 0);
}


/**
 * 一般情况下Time elapsed: 输出都大于500。
 * */
var start = new Date();
setTimeout(function(){
    var end = new Date();
    console.log("Time elapsed: ", end - start, "ms");
}, 500);






var url = "http://localhost/setTimeout/index2.php";
var xhr=new XMLHttpRequest;
xhr.open("GET","http://localhost/setTimeout/index2.php",true);
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState<4)return;
    alert(xhr.responseText);
};
alert("Ajax还没完成呢？");

