import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DisplayState {
  displayRemainingComponents: boolean;
}

export type CrewList = {
  content: string;
  crewName: string;
  crewRecruitmentId: number;
  currentNumber: number;
  exerciseDate: string;
  exerciseKind: string;
  image?: string[];
  location: string;
  postDate: number[];
  title: string;
  totalNumber: number;
  usersLocation: string;
  page: number;
};

interface SearchResult {
  data: CrewList[];
}

const initialDisplayState: DisplayState = {
  displayRemainingComponents: true,
};

const initialSearchResultState: SearchResult["data"] = [];

const displaySlice = createSlice({
  name: "display",
  initialState: initialDisplayState,
  reducers: {
    setDisplayRemainingComponents: (state, action: PayloadAction<boolean>) => {
      state.displayRemainingComponents = action.payload;
    },
  },
});
export const { setDisplayRemainingComponents } = displaySlice.actions;

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: initialSearchResultState,
  reducers: {
    setSearchResult: (state, action: PayloadAction<CrewList[]>) => {
      return [...action.payload];
    },
    addSearchResult: (state, action: PayloadAction<CrewList[]>) => {
      state.push(...action.payload);
    },
    resetSearchResult: () => {
      return [];
    },
  },
});


export const { setSearchResult, addSearchResult, resetSearchResult } =
  searchResultSlice.actions;

  const rootReducer = {
    displayReducer: displaySlice.reducer,
    searchReducer: searchResultSlice.reducer,
  };

  export default rootReducer;
  
