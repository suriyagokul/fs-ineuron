import React from "react";
import ReactDOM  from "react-dom/client";
import {createBrowserRouter, RouterProvider} from"react-router-dom"
import App from "./App";
import  About  from "./About";
import Contact from "./Contact";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    },

])


root.render(
    <div>
        <RouterProvider router={myRouter}/>
    </div>,root)