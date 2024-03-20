import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { getSongData } from "../../services/SongService";

export const fetchSong = createAsyncThunk(
  'music/getSongData',
  async () => {
    const response = await getSongData("Z7I9OC70")
    return response
  },
)
const initialState = {
    listSong:[],
    isLoading: false,
    isError: false,
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchSong.pending, (state, action) => {
      // Add user to the state array
      state.isLoading= true
      state.isError= false
      })
        .addCase(fetchSong.fulfilled, (state, action) => {
            state.listSong= action.payload
        state.isLoading= false
        state.isError= false
      })
      .addCase(fetchSong.rejected, (state, action) => {
        console.log('lỗi')
        state.isLoading= false
      state.isError= true
      })
  },
})

// Action creators are generated for each case reducer function

export default songSlice.reducer