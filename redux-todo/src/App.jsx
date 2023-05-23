// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./features/todo/createTodo";

export default function App() {
  const [item, setItem] = useState("");
  const [currentId, setCurrentId] = useState(null);
  const arr = useSelector((state) => state.data.todo);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center min-h-screen  h-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="mt-24">
        <div className="flex mb-10">
          <input
            type="text"
            placeholder="Add Todo"
            className="px-10 py-3 mr-3 bg-stone-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-stone-300 placeholder-stone-700"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            onClick={() => {
              setItem("");
              dispatch(addTodo(item));
            }}
            className="bg-cyan-500 mr-3 px-10 py-2 rounded-md text-white font-semibold hover:bg-cyan-600"
          >
            Add
          </button>
          <button
            onClick={() => {
              setItem("");
              dispatch(updateTodo({ id: currentId, text: item }));
            }}
            className="bg-red-500 px-10 py-2 rounded-md text-white font-semibold hover:bg-red-600"
          >
            Update
          </button>
        </div>
        <h1 className="text-purple-800 font-semibold text-2xl mb-3 font-poppins">
          Todo Items:{" "}
        </h1>
        {arr?.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between mb-3 bg-green-100 border border-green-400 text-green-700 px-4 w-[100%]  py-3 rounded font-poppins"
          >
            {/* {!editstate ? ( */}
            <p key={todo.id} className="mr-3">
              {todo.text}
            </p>
            {/* ) : ( */}
            {/* <input
                type="text"
                placeholder="Update Todo"
                className="px-10 py-3 mr-3 bg-stone-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-stone-300 placeholder-stone-700"
                value={todo.text}
                onChange={(e) => setUpdatedText(e.target.value)}
              /> */}
            {/* )} */}

            <div className="flex items-center">
              <button
                onClick={() => {
                  setItem(todo.text);
                  setCurrentId(todo.id);
                }}
                key={todo.id}
                className="bg-cyan-500 px-2 py-1 mr-3 rounded-md text-white font-semibold hover:bg-cyan-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                >
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
              <button
                onClick={() => {
                  setItem("");
                  dispatch(deleteTodo(todo.id));
                  console.log("deleteTodo", todo.id);
                }}
                key={todo.id}
                className="bg-rose-500 px-4 py-1 rounded-md text-white font-semibold hover:bg-rose-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
