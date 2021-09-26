/**
 * 1. 关于这个剩余参数一定是以...为开头的, 另外就是它一定是一个数组类型
 * */
{
    function addNumbers(...nums:number[]) {
        var i;
        var sum:number = 0;

        for(i = 0;i<nums.length;i++) {
            sum = sum + nums[i];
        }
        console.log("和为：",sum)
    }
    addNumbers(1,2,3);
    addNumbers(10,10,10,10,10);
}
