import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DisplayState {
  displayRemainingComponents: boolean;
}

const initialState: DisplayState = {
  displayRemainingComponents: true,
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplayRemainingComponents: (state, action: PayloadAction<boolean>) => {
      state.displayRemainingComponents = action.payload;
    },
  },
});

export const { setDisplayRemainingComponents } = displaySlice.actions;
export default displaySlice.reducer;
