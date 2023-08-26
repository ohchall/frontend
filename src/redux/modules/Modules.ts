import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DisplayState {
  displayRemainingComponents: boolean;
}

const initialDisplayState: DisplayState = {
  displayRemainingComponents: true,
};

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

const initialSearchResultState: SearchResult["data"] = [];

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

export default {
  displayReducer: displaySlice.reducer,
  searchReducer: searchResultSlice.reducer,
};
