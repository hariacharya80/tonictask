import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface UserState {
  userData: string;
  expanded: boolean;
}

const getInitialUserData = () => {
  try {
    return JSON.parse(localStorage.getItem("userData") as string);
  } catch {
    return "ss";
  }
};

const initialState: UserState = {
  userData: getInitialUserData(),
  expanded: true,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    fetchUserData: (state) => {
      state.userData = getInitialUserData();
    },

    toggleExpanded: (state) => {
      state.expanded = !state.expanded;
    },
  },
});

export const { fetchUserData, toggleExpanded } = userSlice.actions;

export default userSlice.reducer;
