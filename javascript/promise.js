/* Event Loop 

        The Events first enters into queue and then executes..
*/

// const func1 = () => {
//     return "In function 1";
// }

// const func2 = () => {
//     setTimeout(()=>{
//         console.log("In Timer");
//     }, 2000)
//     return "In function 2";
// }

// const func3 = () => {
//     return "In function 3";
// }

// const main = () => {
//     let val1 = func1();
//     console.log(val1);

//     let val2 = func2();
//     console.log(val2);

//     let val3 = func3();
//     console.log(val3);
// }

// main();

/* O/p: In function 1
        In function 2
        In function 3
        In Timer 

Executes function1 and because of timer it checks for pending tasks to execute and after executng this returns back.

*/

/* promise 
    In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
    
    A promise may have one of three states.

        Pending
        Fulfilled
        Rejected

    Until promise got resolved or rejected it won't exceutes remaining pending tasks...
*/

// const function1 = () => {
//   return "function 1 roii";
// };

// const promisefunc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("🚀 Launched");
//     }, 3000);
//   });
// };

// const function3 = () => {
//   return "function 3 roii";
// };

// const utama = async () => {
//   console.log(function1());

//   const val = await promisefunc();
//   console.log(val);

//   console.log(function3());
// };

// utama();

/* JavaScript Promise Chaining
        Promises are useful when you have to handle more than one asynchronous task, one after another. 
        For that, we use promise chaining.

        You can perform an operation after a promise is resolved using methods then(), catch() and finally().

        If promise got resolved or fulfilled the block within then executes otherwise executes  katch block.
*/

// returns a promise

// let countValue = new Promise(function (resolve, reject) {
//   resolve("Promise resolved");
// });

// // executes when promise is resolved successfully

// countValue
//   .then(function successValue(result) {
//     console.log(result);
//   })

//   .then(function successValue1() {
//     console.log("You can call multiple functions this way.");
//   });

function SomeFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 1000);
  });
}

const fun1 = () => {
  console.log("Runs first");
  SomeFunction().then((value) => {
    console.log("Runs last (probably). Didn't use await on SomeFunction().");
  });
  console.log("Runs last.");
};

fun1();
