import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHistory } from "../../controller/history";

export const fetchMyHistory = createAsyncThunk(
  'music/getMyHistory',
  async () => {
    const response = await getHistory()
    return response.DT
  },
)
const initialState = {
    myHistory:{},
  playlist: [],
  song: [],
  isLoading: false,
  isError: false,
}

export const myHistorySlice = createSlice({
  name: 'myHistory',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchMyHistory.pending, (state, action) => {
        // Add user to the state array
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchMyHistory.fulfilled, (state, action) => {
        state.playlist = action.payload.playlist
        state.song = action.payload.song
        state.myHistory = action.payload
        state.isLoading = false
        state.isError = false
      })
      .addCase(fetchMyHistory.rejected, (state, action) => {
        console.log('lỗi')
        state.isLoading= false
      state.isError= true
      })
  },
})

// Action creators are generated for each case reducer function

export default myHistorySlice.reducer