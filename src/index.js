import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Ep-2/Error";
import About from "./components/Ep-2/About";
import Body from "./components/Body";
import Courasel from "./components/Ep-2/courasel";
import GridBox from "./components/Ep-2/GridBox";
import TicTacToe from "./components/Ep-2/TicTacToe";

// createBrowser router take a config as a list of objects that define a path and what should happen on that path.
// routerProvider provide this configuration to whole application.

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element:<Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/contact",
        element:<Courasel />,
      },
      {
        path:"/grid",
        element:<GridBox />,
      },
      {
        path:"/tic",
        element:<TicTacToe />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

reportWebVitals();
