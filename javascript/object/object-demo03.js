
/**
 * 在javascript中关于这个object的赋值就是这种形式的
 * let 变量名 = {
 *     key1:value1,
 *     key2:value2
 * }
 * 当然这个key1 key2都是变量名,按照变量名规则可以随便写, 这里的value1和value2就是字面量或者对象了
 * 在stu里是字面量, 在model里就是对象
 *
 * */
let stu = {
    name:'张三',
    age: 18
}

console.log(stu);

stu.name='李四';

console.log(stu);

let model={
    d:stu
}

model.d.name='王五';
console.log(model.d);

