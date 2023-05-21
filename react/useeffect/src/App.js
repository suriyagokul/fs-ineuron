import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
export default function App() {
  let lst = {
    name: "suriya",
    age: 23,
    skills: {
      first: "javascript",
      second: "react",
    },
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    let res = await axios.get(
      "https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete",
      {
        params: { query: "itc" },
        headers: {
          "X-RapidAPI-Key":
            "d87034e5b2mshe3f53ab70178832p16e9ccjsn1dec3885c7e0",
          "X-RapidAPI-Host":
            "bloomberg-market-and-financial-news.p.rapidapi.com",
        },
      }
    );
    setData(res.data);
    setLoading(false);
    console.log(res);
  };

  return (
    <div>
      <Card logo="healthify" list={lst} data={data} />

      {/* 
          <p>{data}</p> // gives error Object is not  valid as a react child.
          When you try to render an entire object inside a <p> element in React, you will encounter an error because React expects a string or JSX expression as its child, not an object.
          If you want to display the entire object in the <p> element for debugging purposes or to see the object's structure, you can convert the object to a string using the JSON.stringify() method. 
         jsx doesn't expect the object we have to convert it to a string to display the object..
      */}
      {/* <p>{JSON.stringify(data)}</p> */}
      {/* <button onClick={getdata}>Get API Data</button> */}
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <span className="mr-3 text-rose-600">
            Getting Data.. Please wait!
          </span>
          <div className="animate-spin rounded-full h-5 w-6 border-t-2 border-b-2 border-sky-900"></div>
        </div>
      ) : (
        <button>Get API Data</button>
      )}
    </div>
  );
}
