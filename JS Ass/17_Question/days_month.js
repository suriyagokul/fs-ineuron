const getDaysInAMonth = (year, month) => {
  return new Date(year, month, 0).getDate(); // year, month and 0 is the last day
};

const days = getDaysInAMonth(2023, 5); // pass month from 0-11
console.log(days);
