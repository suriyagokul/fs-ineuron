/* Higher Order Function Which takes function as a parameter and returns a function 
   Callback function is a function which passes to another function
*/

const pow = (a, b) => {
  return Math.pow(a, b);
};

const calculator = (pow, a, b) => {
  // calculator is a function which takes pow as a parameter.
  return pow(a, b);
};

const result = calculator(pow, 2, 2);

// console.log(`Result: ${result}`);

// forEach

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(mul); // here forEach is a HOF and mul is a callback function..

function mul(val) {
  //   console.log(`${val} * ${val} = ${val * val}`);
}

// map  stores result in new arr

const newarr = arr.map((value) => {
  return `5 * ${value} = ${value * 5}`;
});

// console.log(newarr);

// filter

const mobilePrices = [10000, 60000, 8000, 150000, 25000, 30000];

const filteredMobiles = mobilePrices.filter((price) => {
  return price >= 10000 && price <= 50000;
});

// console.log(filteredMobiles);

/* reduce reuces entire array to single value... 
   takes callback function and initial value...
   clback function we have 2 parameters accumulator and current value.. 
   current iterates towards every element in the array.
   
*/
const sumOfNumbers = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// console.log(`Sum: ${sumOfNumbers}`);

// setTimeOut  clearTimeOut to stop
let secs = 0;

// setTimeout(() => {
//   console.log(`After 5 Seconds`);
// }, 5000);

// setInterval clearInterval to stop

// const int = setInterval(() => {
//   secs += 2;
//   if (secs >= 10) {
//     clearInterval(int);
//   }
//   console.log(`${secs} Seconds 👋👋👋`);
// }, 2000);

