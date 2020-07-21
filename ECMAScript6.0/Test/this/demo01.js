

class Cat {
    sayThis () {
        console.log(this); // 这里的 `this` 指向谁？
    }

    exec (cb) {
        cb();
    }

    render () {
        this.exec(this.sayThis.bind(this));
    }
}

const tom = new Cat();
tom.render();

