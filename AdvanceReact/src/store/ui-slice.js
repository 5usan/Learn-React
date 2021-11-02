import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  cartIsShown: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialCounterState,
  reducers: {
    toggle(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice;
