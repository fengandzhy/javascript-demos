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

