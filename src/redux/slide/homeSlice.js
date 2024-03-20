import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeData } from "../../services/homeService";

export const fetchHome = createAsyncThunk("getHome", async () => {
  const response = await getHomeData();
  // console.log(response)
  return response;
});
const initialState = {
  dataHome: [],
  newRelease: [],
  songHot: [],
  songRemix: [],
  songChill: [],
  songSad: [],
  top100: [],
  albumHot: [],
  hNewrelease: [],

  isLoading: false,
  isError: false,
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
        state.dataHome = action.payload;
        state.newRelease = state.dataHome.items[2].items.all;
        state.songHot = state.dataHome.items[11].items;
        state.songRemix = state.dataHome.items[4].items;
        state.songChill = state.dataHome.items[3].items;
        state.songSad = state.dataHome.items[5].items;
        state.top100 = state.dataHome.items[9].items;
        state.albumHot = state.dataHome.items[11].items;
        state.hNewrelease = state.dataHome.items[6].items;
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
