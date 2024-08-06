console.log("Hello Node!");

// console.log(process.argv);

const double = (num) => num * 2;
// console.log(double(10));

// console.log(document); ❌
// console.log(window); ❌

// setTimeout
// setInterval

// console.log(globalThis); and (process.argv) // only there in Node.js

const sum = (a, b) => a + b;

// const [, , a, b] = process.argv;
// console.log(sum(+a, +b));

console.log(sum(+process.argv[2], +process.argv[3]));
