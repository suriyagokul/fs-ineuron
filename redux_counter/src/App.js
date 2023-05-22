import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByValue,
} from "./features/counter/counterSlice";
import "./index.css";

export default function App() {
  const [input, setInput] = useState("");
  let count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className="bg-stone-800 font-[Poppins]  flex flex-col h-[100vh]">
      <h1 className=" text-purple-500 font-bold text-center mt-24 text-xl">
        Counter App
      </h1>

      <div className="flex flex-col items-center justify-center h-[50vh]">
        <div className="flex mb-6">
          <input
            type="number"
            placeholder="Number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autofocus
            className="bg-zinc-600 border-1 text-white rounded-md px-4 py-2 mr-5 hover:bg-zinc-700  focus:outline-none"
          />
          <button
            onClick={() => {
              dispatch(incrementByValue(Number(input)));
              setInput("");
            }}
            className="bg-sky-500 rounded-md px-4 py-2 text-white font-semibold hover:bg-sky-700"
          >
            {" "}
            Increment by Value{" "}
          </button>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => dispatch(increment())}
            className="bg-violet-500 rounded-md px-4 py-2 text-white font-semibold hover:bg-violet-600"
          >
            Increment by 1
          </button>
          <h1 className="number ml-10 mr-10 text-white text-2xl">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-violet-500 rounded-md px-4 py-2 text-white font-semibold hover:bg-violet-600"
          >
            Decrement by 1
          </button>
        </div>
      </div>
    </main>
  );
}
