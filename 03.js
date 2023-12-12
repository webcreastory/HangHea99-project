// 단축 속성명 : property shorthand

// const name = "nbc";
// const age = "30";

// const obj = {
//     name: name, 
//     age: age,
// }
// 배열 같지만 객체다.
// const obj = { name:name, age:age };
// const obj = {name, age};

// 전개 구문 = spread operator
// destructuring과 가장 많이 사용되는 es6문법 중 하나!

// let arr = [1, 2, 3];

// let newArr = [...arr, 4];
// console.log(arr);
// console.log(newArr);

// 객체
// let user = {
//     name: 'nbc',
//     age: 30,
// }

// let user2 = { ...user }
// console.log(user);
// console.log(user2);

// 나머지 매개변수(rest parameter)
// function exampleFunc (a, b, c, ...args) {
//     console.log(a, b, c);
//     console.log(args);
// }

// exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴(Template Literal)
// 사용자 측면 편의성
const testValue = "안녕하세요!"
console.log(`Hello World ${testValue}`);
console.log(`
    Hello
        My name is Javascript!!!

        Nice to meet you!!!
`);