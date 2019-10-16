let num = 101.88999;

//Round up to nearest 2 decimal places
console.log(num.toFixed(2));

//Round up to nearest integer;
console.log(Math.round(num));

//Round up ALWAYS to nearest integer
console.log(Math.ceil(num));

//Round down ALWAYS to nearest integer;
console.log(Math.floor(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);
