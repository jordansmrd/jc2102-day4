//- Functions
function countTo3() {
  console.log(1);
  console.log(2);
  console.log(3);
}

countTo3();

// Functions with Arguments
//function declaration

function Sum2Numbers(firstValue, secondValue) {
  //task
  console.log("hasil function " + (firstValue + secondValue));
}
Sum2Numbers(10, 5);

//function expression
var SumNumbers = function (firstValue, secondValue) {
  return firstValue + secondValue;
};

console.log(SumNumbers(13, 10));

//Return Values
function Sum2Numbers2(firstValue, secondValue) {
  return firstValue + secondValue;
}
console.log(" hasil function return " + Sum2Numbers2(3, 5));

//Argument vs Parameter
//parameter adalah input yang disediakan oleh sebuah function , contoh :  Sum2Numbers2(firstValue, secondValue)
//argument input yang dipanggil pada saat function dipanggil, contoh : Sum2Numberss2(3,4)

//Arrow Functions

const sum2Number3 = (firstValue, secondValue) => {
  return firstValue + secondValue;
};
console.log(" hasil arrow function " + sum2Number3(10, 20));

//Callback Functions
function myDisplayer(some) {
  console.log(some);
}
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
myDisplayer("ayam goreng");
myCalculator(5, 5, myDisplayer);

// automatically returns the sum
const sumTwoValues = (firstValue, secondValue) => firstValue + secondValue;
console.log(" hasil dari arrow function 1 line " + sumTwoValues(30, 13));

//foreach
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach((val, idx, arrNum) => {
  console.log(val);
  console.log("index ke " + idx);
  console.log("value Array Number " + arrNum);
});

let sum = 0;
numbers.forEach(myFunction);
console.log("Callback Foreach " + sum);

function myFunction(item) {
  sum += item;
}

//Map
sum = 0;
numbers.map(myFunction);
console.log("Callback Map " + sum);
numbers.map((val, idx, arrNum) => {
  console.log(val);
  console.log("index ke " + idx);
  console.log("value Array Number " + arrNum[idx]);
});

//foreach vs map? sama saja hanya map return sebuah array baru

//filter
sum = 0;
const result = numbers.filter(checkBilanganBulat);
console.log(result);
function checkBilanganBulat(item) {
  //filter bilangan bulat
  return item % 2 == 0;
}
