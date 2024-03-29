import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongData } from "../../services/SongService";

export const fetchPageSong = createAsyncThunk(
  'music/getSongData',
  async (id) => {
    const response = await getSongData(id)
    return response
  },
)
const initialState = {
  pageData: [],
  isLoading: false,
  isError: false,
}

export const songPageSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchPageSong.pending, (state, action) => {
        // Add user to the state array
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchPageSong.fulfilled, (state, action) => {
        state.pageData = action.payload
        state.isLoading = false
        state.isError = false
      })
      .addCase(fetchPageSong.rejected, (state, action) => {
        console.log('lỗi')
        state.isLoading= false
      state.isError= true
      })
  },
})

// Action creators are generated for each case reducer function

export default songPageSlice.reducer