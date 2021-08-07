
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
 * */
const JsonFromJSON = JSON.parse(strJson);
console.log(JsonFromFunction.name);