/**
 * 变量对象
 * */

/**
 * 执行上下文里代码的运行步骤
 * 	1、创建阶段（这个阶段发生在执行具体代码前）
 * 		1、创建变量对象（Variable Object）
 * 			1、初始化arguments对象	它的值为Arguments对象
 * 				注意:
 * 					只有执行上下文为函数环境的时候，才会初始化这个arguments对象
 * 			2、查找当前上下文的形参
 * 				1、找所有的形参并在变量对象里创建一条key:value
 * 				2、key为形参的名字，value为对应实参的值。如果没有实参value为undefined
 *
 * 			3、查找当前上下文的函数声明（function）
 * 				1、找function声明的函数并在变量对象里创建一条key:value
 * 				2、key为function后的名字，value为函数在内存里的地址
 * 				3、如果有同名的key，后面会把前面的覆盖
 *
 * 			4、查找当前上下文中的变量声明（var）
 * 				1、找var声明的变量并在变量对象里创建一条key:value
 * 				2、key为变量名，value为undefined
 * 				3、如果key已经存在，直接跳过（为了防止这个key为函数，那函数会被修改为undefined）
 * 				注意：这里为什么不去查不用var声明的变量呢，不用var声明的变量严格来讲不叫变量，而是全局对象身上的属性
 *
 * 		2、建立作用域链
 * 		3、确定this的指向
 *
 * 	2、代码执行阶段
 * 		1、变量赋值
 * 		2、函数引用
 * 		3、执行其他代码
 * 		注意：
 * 			1、当走到这个阶段的时候，上面的变量对象会变成活动对象（Active Object）
 */



/**
 * arguments;
 job;
 level;
 debugger;
 用以上方式来查看变量
 *
 * */
function father(a,b){
    const job = '开挖掘机';
    arguments;
    job;
    level;
    debugger;
    var level = '老司机';
    if(true){
        var width='180px';
    }else{
        var height='180cm';
    }

    function son1(){
        const job = '厨子';
    }

    function son2(){
        const job = '小二'
    }
    
}
father('abcd');



