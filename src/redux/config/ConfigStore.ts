import { configureStore } from "@reduxjs/toolkit";
import Modules from "../modules/Modules";

const store = configureStore({
  reducer: {
    display: Modules.displayReducer,
    searchResults: Modules.searchReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;