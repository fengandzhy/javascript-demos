
/**
 * 使用js函数eval()将字符串转化为json
 * */
const strJson = '{ "name": "小强", "age": 16 }';
const JsonFromEval = eval("("+strJson+")");
console.log(JsonFromEval.name);

/**
 * 使用new Function将字符串转化成json
 * */
const JsonFromFunction = (new Function("return " + strJson))();
console.log(JsonFromFunction.name);

/**
 * 使用JSON.parse将字符串转化成json
 * 这个是严格遵守json规范的, '{ "name": "小强", "age": 16 }' 就跟这个一样,外面用单引号, 里面的key值用双引号.
 * */
const JsonFromJSON = JSON.parse(strJson);
console.log(JsonFromFunction);

/**
 * 将一个obj转换为字符串
 * */
const a={"name":"tom","sex":"男","age":"24"};
const aToStr = JSON.stringify(a);
console.log(a);
console.log(aToStr);

const b = [{"name":"tom","sex":"男","age":"24"},{"name":"tim","sex":"nv","age":"25"}];
const bToStr = JSON.stringify(b);
console.log(b);
console.log(bToStr);

const c = {
    name:'tom',
    sex:'male',
    age:24
}
const cToStr = JSON.stringify(c);
console.log(cToStr);