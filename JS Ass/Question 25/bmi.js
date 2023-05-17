let weight = 50;
let height = 172;

/*  - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more 
    bmi = weight in Kg / (height(in m) x height(in m)) 
    1cm = 0.01
*/

let hinmetres = height * 0.01;
let bmi = weight / (hinmetres * hinmetres);

// bmi.toFixed(2);

if (bmi < 18.5) {
  console.log("Maintain Nutritional Balance!! You are Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Nothing to worry!! Normal weight");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("Do Excercises!! Overweight");
} else {
  console.log("You have Obesity");
}
