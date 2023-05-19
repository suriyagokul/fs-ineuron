/* call stack

    First js scans entire program and assigns memory to each variable and initializes to undefined..

    Later in memory it stores the values of the variable..

    If any function is defined then it again scans the function in that if variables exists makes it to undefined and then after scaanning it redines values to those variables.
    
    While scanning if there are any functions then it will be pushed onto the stack and after execution it will get popped off from the stack.

    Whenever a js file creates and runs GEC (Global Execution Context) will be pushed onto the stack..

    Any JavaScript code which does not reside in any function will be present in the global execution context. The reason behind its name 'default execution context' where the code begins its execution when the file first loads in the web browser.
*/

/* Lexical Scope/Environment and Closure  

    Lexical Environment is nothing but the way of child/inner function accessing the properties of parent.
    That particular code block is said to be "Lexical Scope"

    Closure --> Closure is a function having access to the parent scope, even after the parent function has closed..

    Simple Lexical Environment comes under Closure..
*/

// lexical environment
function marraige() {
  let gift = "Platinum Chain";
  console.log("Marriage is Going On Here... Eat Lunch and go home...");
  function weddingGifts() {
    console.log(`Presented Gift: ${gift}`);
  }
  weddingGifts();
}

// weddingGifts(); error
marraige();

// Closure
function outer() {
  console.log("I am outer function..");
  function inner() {
    console.log("I am child of outer function..");
  }
  return inner;    // not calling inner jst returning the fun back 
}

let child = outer();
child(); // calling inner function from outside i.e said to be "closure"
