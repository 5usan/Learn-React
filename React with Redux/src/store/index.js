//const redux = require("redux");
//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./counter";
import  authSlice  from "./auth";

// Using react-redux rather that reactjs/toolkit for redux for counter state
// const initialCounterState = {
//   counter: 0,
//   showCounter: true,
// };
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
