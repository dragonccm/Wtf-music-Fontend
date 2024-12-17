import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRatingData } from "../../services/ratingService";


export const fetchRating = createAsyncThunk("getRating", async () => {
  const response = await getRatingData();
  if (response.EC === '0') {
    
    return response.DT.data;
  }
});
const initialState = {
  dataRating: {},
  week_vn: [],
  week_us: [],
  week_korea: [],
  isLoading: false,
  isError: false,
};

export const ratingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchRating.pending, (state, action) => {
        // Add user to the state array
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRating.fulfilled, (state, action) => {
        state.dataRating = action.payload;
        state.week_vn = state.dataRating.weekChart[0];
        state.week_us = state.dataRating.weekChart[1];
        state.week_korea = state.dataRating.weekChart[2];

        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchRating.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// Action creators are generated for each case reducer function

export default ratingSlice.reducer;
