const person = {
    name: "John",
    age: 31,
    isMarried: true,
    sayHello: () => {
        console.log(`Hello, My name is ${this.name}`);
    },
    // sayHello: function () {
    //     // console.log("Hello, My name is " + this.name);
    //     console.log(`Hello, My name is ${this.name}`)
    // },
};

person.sayHello();

