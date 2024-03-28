
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./src/reducers/productSlice";

export default configureStore({
  reducer: {
    todos: productReducer,
  },
});
