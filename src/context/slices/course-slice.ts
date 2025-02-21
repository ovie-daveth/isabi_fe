import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Course {
  id: string;
  title: string;
  description: string;
  enrolled: boolean;
}

interface CourseState {
  courses: Course[];
}

const initialState: CourseState = {
  courses: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses.push(action.payload);
    },
    enrollCourse: (state, action: PayloadAction<string>) => {
      const course = state.courses.find((c) => c.id === action.payload);
      if (course) {
        course.enrolled = true;
      }
    },
    removeCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addCourse, enrollCourse, removeCourse } = courseSlice.actions;
export default courseSlice.reducer;
