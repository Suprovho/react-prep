import React from "react";
import "../src/app.css";
import Header from "./components/Ep-2/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
