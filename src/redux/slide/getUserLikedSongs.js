import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserLikedSongsSv } from "../../services/userGetLikedSongService";

export const getUserLikedSong = createAsyncThunk("userlikedSongs/getUserLikedSong", async () => {
    const response = await getUserLikedSongsSv();
    return response
});
const initialState = {
    userlikedSongs: [],
    isLoading: false,
    isError: false,
};

export const getUserLikedSongSlice = createSlice({
    name: "userlikedSongs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserLikedSong.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getUserLikedSong.fulfilled, (state, action) => {
                state.userlikedSongs = action.payload.DT;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getUserLikedSong.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function

export default getUserLikedSongSlice.reducer;
