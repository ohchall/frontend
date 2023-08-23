import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayRemainingComponents: true,
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplayRemainingComponents: (state, action) => {
      state.displayRemainingComponents = action.payload;
    },
  },
});

export const { setDisplayRemainingComponents } = displaySlice.actions;
export default displaySlice.reducer;
