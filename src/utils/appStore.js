import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const appStore = configureStore({
  //* it is a main store reducer which contain many slice reducers.
  reducer: {
    users: userSlice,
  },
});

export default appStore;
