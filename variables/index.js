// How to run this file
// node index

let num1 = 40;
let num2 = 100;
let sum = 0;

const firstNumber = document.getElementById("firstNumber");
//firstNumber.innerHTML = "<span>23</span>";
const secondNumber = document.getElementById("secondNumber");
secondNumber.textContent = num2;

sum = num2 + num1;
console.log(sum);

const result = document.getElementById("sum");
result.textContent = sum;

const price = 1000;
const price2 = 3000;

let total = price + price2;

console.log(total);

total = 0;

console.log(total);
