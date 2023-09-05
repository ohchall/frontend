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

interface UserInfo {
  nickname: string;
  userEmail: string;
  userName: string;
}

interface DirectionInfo {
  itemId: number | null;
  redirectUrl: string | null;
  socialItemId: string | null;
}

interface LoggedInState {
  isLoggedIn: boolean;
}

const initialDisplayState: DisplayState = {
  displayRemainingComponents: true,
};

const initialSearchResultState: SearchResult["data"] = [];

const initialUserInfoState: UserInfo = {
  nickname: "",
  userEmail: "",
  userName: "",
};

const initialErrorState: { error: boolean } = {
  error: false,
};

const initialDirectionState: DirectionInfo = {
  itemId: null,
  redirectUrl: "",
  socialItemId: "",
};

const initialLoggedInState: LoggedInState = {
  isLoggedIn: false,
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

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserInfoState,
  reducers: {
    setUserInfo(state, action) {
      state.nickname = action.payload.nickname;
      state.userEmail = action.payload.userEmail;
      state.userName = action.payload.userName;
    },
    resetUserInfo() {
      return initialUserInfoState;
    },
  },
});

export const { setUserInfo, resetUserInfo } = userSlice.actions;

const errorSlice = createSlice({
  name: "error",
  initialState: initialErrorState,
  reducers: {
    setErrorState: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    resetErrorState: () => initialErrorState,
  },
});

export const { setErrorState, resetErrorState } = errorSlice.actions;

const directionSlice = createSlice({
  name: "direction",
  initialState: initialDirectionState,
  reducers: {
    setItemId: (state, action: PayloadAction<number>) => {
      state.itemId = action.payload;
    },
    setSocialItemId: (state, action: PayloadAction<string>) => {
      state.socialItemId = action.payload;
    },
    setRedirectUrl: (state, action: PayloadAction<string>) => {
      state.redirectUrl = action.payload;
    },
    resetDirection: () => initialDirectionState,
  },
});

export const { setItemId, setRedirectUrl, setSocialItemId, resetDirection } =
  directionSlice.actions;

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: initialLoggedInState,
  reducers: {
    setLoggedInStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    resetLoggedInStatus: () => initialLoggedInState,
  },
});

export const { setLoggedInStatus, resetLoggedInStatus } = loggedInSlice.actions;

const rootReducer = {
  displayReducer: displaySlice.reducer,
  searchReducer: searchResultSlice.reducer,
  userReducer: userSlice.reducer,
  errorReducer: errorSlice.reducer,
  directionReducer: directionSlice.reducer,
  loggedinReducer: loggedInSlice.reducer,
};

export default rootReducer;


