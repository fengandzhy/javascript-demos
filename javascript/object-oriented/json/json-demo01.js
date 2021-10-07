
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
console.log(JsonFromFunction.name);