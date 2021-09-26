/**
 * 1. 可选参数 lastName?: string 就是可有可无的参数, 也就是说以下函数接受一个参数可以，接受两个参数也可以
 *
 * 2. 这个函数原本没有确定有返回值
 * */
{
    function buildName(firstName: string, lastName?: string) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return null;
    }

    console.log(buildName('1','2'));
    console.log(buildName('1'));
}