import { createSlice } from "@reduxjs/toolkit";

const initialVisibleState = { cartIsVisible: false, notification: null };

const visibilitySlice = createSlice({
  name: "visible",
  initialState: initialVisibleState,
  reducers: {
    toggleVisible: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { toggleVisible, showNotification } = visibilitySlice.actions;

export default visibilitySlice.reducer;
