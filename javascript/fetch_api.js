import fetch from "node-fetch";

const url = "https://restcountries.com/v3.1/all";

let info = [];

/* fetch API, asynchronous means that the execution of the code does not pause or block while waiting for the network request to complete. Instead, the code continues to execute immediately after calling fetch, and the response is handled separately when it becomes available.
 */
const getData = async () => {
  const res = await fetch(url);
  let data = await res.json(); // response has status and headers.. So we need to use json
  info.push(data);
};

async function fetchData() {
  await getData();
  console.log(info); // waits unitl getData method done execution..
}

fetchData();
