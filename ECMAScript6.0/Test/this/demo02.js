const jerry = {
    sayThis: function () {
        console.log(this); // 这里的 `this` 指向谁？
    },

    exec: function (cb) {
        cb();
    },

    render: function () {
        this.exec(this.sayThis);
    },
}

jerry.render();
