import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeData } from "../../services/homeService";

export const fetchHome = createAsyncThunk("getHome", async () => {
  const response = await getHomeData();
  // console.log(response)
  return response;
});
const initialState = {
  dataHome: [],
  banner:[],
  newRelease: {},
  songHot: [],
  songRemix: [],
  songChill: [],
  songSad: [],
  top100: [],
  albumHot: [],
  hNewrelease: [],

  isLoading: true,
  isError: true,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchHome.pending, (state, action) => {
        // Add user to the state array
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchHome.fulfilled, (state, action) => {
        state.dataHome = action.payload.url;
        state.banner = state.dataHome.items[0].items;

        state.newRelease = action.payload.newRelease;
        state.songHot = action.payload.songHot;
        state.songRemix = action.payload.songRemix;
        state.songChill = action.payload.songChill;
        state.songSad = action.payload.songSad;
        state.top100 = action.payload.songTop100;
        state.albumHot = action.payload.albumHot;
        state.hNewrelease = action.payload.songRating;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchHome.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// Action creators are generated for each case reducer function

export default homeSlice.reducer;
