let no = 25;
let res = true;

for (let i = 2; i <= no / 2; i++) {
  if (no % i == 0) {
    res = false;
    break;
  }
}

res ? console.log("Prime") : console.log("Not Prime");
