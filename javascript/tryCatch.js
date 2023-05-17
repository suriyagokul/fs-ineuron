/*  Types of Errors  --->

    1) Syntax Error
    2) Reference Error
    3) Type Error
    4) URI Error
    5) Range Error
    6) Evaluation Error

    whenever any  error occurs it will catch the error and executes catch block
*/

// If we write this it won't execute any statements after this console.log(firstName);

cansole.log("");

try {
  console.log(firstName);
} catch (e) {
  console.log(e.name); // Name of Error ReferenceError
} finally {
  console.log("I am in finally blcok");
}

console.log("I will execute");

// throw custom exceptions
try {
  let x = "";
  if (x == "") {
    throw "Empty";
  }
} catch (err) {
  console.log(err);
}