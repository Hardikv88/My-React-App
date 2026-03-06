
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Layout from "./components/Layout";
import Users from "./pages/Users";
import Settings from "./pages/Settings";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       { 
        path: "home", 
        element: <Home /> },
      { path: "users", 
        element: <Users /> },
       { path: "settings", 
        element: <Settings /> },
      ]
  },
]); 

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  // <React.StrictMode>
   <RouterProvider router={router} />
  // </React.StrictMode>
);
