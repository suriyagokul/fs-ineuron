const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 23];

// console.log(ages.sort());

// console.log(Math.min(...ages)); // spread operator

// console.log(Math.max(...ages));

/* Sorted Array [
  19, 19, 20, 22, 24,
  24, 24, 25, 25, 26
] */

// median

// let middle = Math.round(ages.length / 2);
// let even = ages.length % 2 == 0;
// if (even) {
//   console.log(ages[ages.length / 2]);
// } else {
//   let median = (ages[middle] + ages[middle - 1]) / 2;
//   console.log(median);
// }

// average of ages
const itemsSum = ages.reduce((acc, curr) => acc + curr, 0);
const average = itemsSum / ages.length;

console.log(average);

// range of ages

const range = Math.max(...ages) - Math.min(...ages);
console.log(range);

// abs

console.log(Math.abs(Math.min(...ages) - Math.max(...ages)));
