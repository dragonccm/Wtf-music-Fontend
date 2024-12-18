import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adSongToPlaylistService } from "../../services/adSongToPlaylistService";

export const adSongToPl = createAsyncThunk("newsong/addSong", async (data) => {
    const response = await adSongToPlaylistService(data);
    return response
});
const initialState = {
    updateRes: {},
    isLoading: false,
    isError: false,
};

export const adSongToPlslice = createSlice({
    name: "updateRes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(adSongToPl.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(adSongToPl.fulfilled, (state, action) => {
                state.updateRes = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(adSongToPl.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function

export default adSongToPlslice.reducer;
