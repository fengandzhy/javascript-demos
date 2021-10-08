/**
 * array.join 就是把数组的每个元素都拆开然后组成一个字符串,
 * 就是这个array为对象数组的时候, 它所组成的字符串是像这样的
 * [object Object],[object Object],[object Object]
 * */
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(','));
// expected output: "FireAirWater"

console.log(typeof elements.join('-'));
// expected output: "Fire-Air-Water"

const objArray = [{"name":"Sam"}, {"name":"Tim"}, {"name":"Jim"}];
console.log(typeof objArray.join(','));
console.log(objArray.join());

