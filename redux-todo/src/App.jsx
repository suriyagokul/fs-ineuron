// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./features/todo/createTodo";

export default function App() {
  const [items, setItems] = useState("");
  const arr = useSelector((state) => state.data.todo);
  console.log(arr);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center min-h-screen  h-[100vh] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="mt-24">
        <h1 className="bg-green-100 border border-green-400 text-green-700 px-4 w-[100%] mb-3 py-3 rounded font-poppins">
          Todo Items:{" "}
          {arr?.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </h1>
        <div className="flex mb-10">
          <input
            type="text"
            placeholder="Add Todo"
            className="px-10 py-3 mr-3 bg-stone-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-stone-300 placeholder-stone-700"
            value={items}
            onChange={(e) => setItems(e.target.value)}
          />
          <button
            onClick={() => {
              setItems("");
              dispatch(addTodo(items));
            }}
            className="bg-cyan-500 px-10 py-2 rounded-md text-white font-semibold hover:bg-cyan-600"
          >
            Add
          </button>
        </div>
        <button
          onClick={() => {
            setItems("");
            dispatch(addTodo(items));
          }}
          className="bg-rose-500 px-10 py-2 rounded-md text-white font-semibold hover:bg-rose-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
