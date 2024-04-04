import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addPlayListService } from "../../services/addPlaylistService";

export const postPlayList = createAsyncThunk("newplaylist/createplaylist", async (data) => {
    const response = await addPlayListService(data);
    return response
});
const initialState = {
    newplaylist: {},
    isLoading: false,
    isError: false,
};

export const createplaylistslice = createSlice({
    name: "newplaylist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postPlayList.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(postPlayList.fulfilled, (state, action) => {
                state.newplaylist = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(postPlayList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function

export default createplaylistslice.reducer;
