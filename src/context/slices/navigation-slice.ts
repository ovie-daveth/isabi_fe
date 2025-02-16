import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  activeTab: number;
}

const initialState: NavigationState = {
  activeTab: 1, // Default to the first tab
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = navigationSlice.actions;
export default navigationSlice.reducer;
