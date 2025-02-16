import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  activeTab: number;
  openCourse: boolean;
  subject: string
}

// Load initial state from localStorage if available
const storedState = localStorage.getItem("navigationState");
const initialState: NavigationState = storedState
  ? JSON.parse(storedState)
  : { activeTab: 1, openCourse: false, subject: "" };

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTab = action.payload;
      localStorage.setItem("navigationState", JSON.stringify(state)); // Save to localStorage
    },
    setOpenCourse: (state, action: PayloadAction<boolean>) => {
      state.openCourse = action.payload;
      localStorage.setItem("navigationState", JSON.stringify(state)); // Save to localStorage
    },
    setSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
      localStorage.setItem("navigationState", JSON.stringify(state)); // Save to localStorage
    },
  },
});

export const { setActiveTab, setOpenCourse, setSubject } = navigationSlice.actions;
export default navigationSlice.reducer;
