const date = new Date();

let today =
  date.toISOString().slice(0, 10) + " " + date.toISOString().slice(14, 22);

console.log(`Format: YYYY-MM-DD HH:MM ${today}`);

console.log(`Format: DD/MM/YYYY HH:MM ${date.toLocaleString()}`);

let newFormat = date.toLocaleString().split("/").join("-");

console.log(`Format: DD-MM-YYYY HH:MM ${newFormat}`);
