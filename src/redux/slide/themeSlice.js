import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme")||'light',
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
      changeTheme: (state, action) => {
          state.theme = state.theme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', state.theme);
    },
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

      
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme} = themeSlice.actions

export default themeSlice.reducer;
