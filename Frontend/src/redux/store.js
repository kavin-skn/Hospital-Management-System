import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./redux/userslice";
import userReducer from "../redux/userslice"; // Correct file path


export default configureStore({
  reducer: {
    user: userReducer,
    // other reducers if any
  },
});
