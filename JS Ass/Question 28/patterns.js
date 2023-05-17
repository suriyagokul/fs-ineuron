let rows = 3;
let str = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  str += "\n";
}

console.log(str);

let str1 = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= 3; j++) {
    str1 += "*";
  }
  str1 += "\n";
}

console.log(str1);

let str2 = "";
let k = 0;
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i + k; j++) {
    str2 += "*";
  }
  str2 += "\n";
  k += 1;
}

console.log(str2);
