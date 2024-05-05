import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript library

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Activities from './pages/Activities';
import Package from "./pages/Package.jsx";
import ImageGallery from './pages/ImageGallery';

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
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/package",
        element: <Package />,
      },
      {
        path: "/gallery",
        element: <ImageGallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
