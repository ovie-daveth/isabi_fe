import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/course-slice";
import navigationReducer from "./slices/navigation-slice"


export const store = configureStore({
  reducer: {
    course: courseReducer,
    navigation: navigationReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
