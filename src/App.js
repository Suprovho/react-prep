import React, { Suspense, lazy } from "react";
import "../src/app.css";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Context from "./context/Context";

const LazyComponent = lazy(() => import("./components/Ep-2/Header"));

const App = () => {
  return (
    <div>
      <Context>
      <Provider store={appStore}>
        <Suspense fallback={<div>Loading.....</div>}>
          <LazyComponent />
        </Suspense>
        <Outlet />
      </Provider>
      </Context>
    </div>
  );
};

export default App;
