// ES6 

// 2015년도 이전 => var
// (1) es6 => let(변수, 재할당O), const(상수, 재할당X)
// var a = 1;
// var a = 3;(선언O,재할당O)

// let a = 4;
// a = 5;(재할당O)

// const a = 1;
// a = 2;(재할당X)

// (2) arrow function
function add () {

}

var add = function () {

}

var add = (X) => {
    return 1;
}

var add = X => 1;

// (3) 삼항 연산자
// condition ? true인경우 : false인경우

console.log(true ? "참" : "거짓");
console.log(false ? "참" : "거짓");
console.log(1 === 1 ? "참" : "거짓");
console.log(1 !== 1 ? "참" : "거짓");