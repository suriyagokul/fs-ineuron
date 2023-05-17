// destructuring

const data = ["suriya", 23, "durmiendo"];

const [name, age, hobbie] = data;

// console.log(name, age, hobbie);

// destructuring using Rest Operator
const data1 = ["suriya", 23, "durmiendo", "comiendo", "codificación"];

const [firstName, agee, ...hobbies] = data1;

// console.log(firstName, agee, hobbies);

//  using Spread Operator
// function a(x, y) {
//   console.log(x + y);
// }
// myarr = [1, 2, 3];
// a(...myarr);

// using Rest Operator
function b(num1, ...values) {
  console.log(num1, values);
}
b(20, 40, 60, 70);
