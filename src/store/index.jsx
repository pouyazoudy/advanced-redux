import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counterSlice";
import visibilityReducer from "./visibilitySlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    visible: visibilityReducer,
  },
});

export default store;
