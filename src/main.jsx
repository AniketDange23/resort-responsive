import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Rooms from './pages/Rooms';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
 
      {
        path: "/rooms",
        element: <Rooms />,
      },
    {
      path: "/blog",
      element: <Blog/> ,
    },
     {
        path: "/contact",
        element: <Contact/> ,
      },
    
    



    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
