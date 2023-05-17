import { countries } from "../Question 19/countries.js";

let exist = countries.includes("Ethiopia");

if (exist) {
  console.log("Ethiopia");
} else {
  countries.push("Ethiopia");
}

console.log(countries);
