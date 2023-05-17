const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};

const calculator = (fun, a, b) => {
  return fun(a, b);
};

const res = calculator(add, 10, 20);
console.log(res);

const res1 = calculator(sub, 20, 10);
console.log(res1);

const res2 = calculator(mul, 10, 20);
console.log(res2);

const res3 = calculator(div, 10, 20);
console.log(res3);
