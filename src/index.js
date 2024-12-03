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
import Todo from "./components/Ep-2/Todo";
import ProgressBarM from "./components/Ep-2/ProgressBarM";
import InfiniteScroll from "./components/Ep-2/infiniteScroll";
import Emicalc from "./components/Ep-2/emiCalc";
import Unkown from "./components/Ep-2/unkown";
import TrelloBoard from "./components/Ep-2/TrelloBoard";
import Output from "./components/Ep-2/outputQ";
import Train from "./components/Ep-2/Train";
import OutputQ2 from "./components/Ep-2/outputQ2";
import Ep1 from "./components/machinecoding/ep1";
import Ticket from "./components/machinecoding/Ticket";
import Gift from "./components/machinecoding/Gift";
import Memo from "./components/Ep-2/memo";
import Star from "./components/machinecoding/Star";
import TabComponent from "./components/machinecoding/Tabs";
import FileEx from "./components/machinecoding/fileExplorer";
import CommentSection from "./components/machinecoding/nested-comment/CommentSection";
import Cart from "./components/ECart.js/Cart";
import Home from "./components/ECart.js/Home";
import Ecart from "./components/ECart.js/Ecart";
import Form from "./components/machinecoding/form/Form";

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
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Courasel />,
      },
      {
        path: "/grid",
        element: <GridBox />,
      },
      {
        path: "/tic",
        element: <TicTacToe />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/progress",
        element: <ProgressBarM />,
      },
      {
        path: "/infinite",
        element: <InfiniteScroll />,
      },
      {
        path: "/emi",
        element: <Emicalc />,
      },
      {
        path: "/album",
        element: <Unkown />,
      },
      {
        path: "/board",
        element: <TrelloBoard />,
      },
      {
        path: "/output",
        element: <Output />,
      },
      {
        path: "/train",
        element: <Train />,
      },
      {
        path: "/output2",
        element: <OutputQ2 />,
      },
      {
        path: "/output3",
        element: <Ep1 />,
      },
      {
        path: "/ticket",
        element: <Ticket />,
      },

      {
        path: "/gift",
        element: <Gift />,
      },
      {
        path: "/memo",
        element: <Memo />,
      },
      {
        path: "/star",
        element: <Star />,
      },
      {
        path: "/tab",
        element: <TabComponent />,
      },
      {
        path: "/file",
        element: <FileEx />,
      },
      {
        path: "/comment",
        element: <CommentSection />,
      },
      {
        path: "/Ecart",
        element: <Ecart />,
        children: [
          {
            path:"/Ecart",
            element:<Home />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
      {
        path:"/form",
        element:<Form />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
