import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserPLayListSv } from "../../services/getUserPlayListService";

export const getUserPl = createAsyncThunk("userPlaylist/getUserPlaylist", async (data) => {
    const response = await getUserPLayListSv(data);
    return response
});
const initialState = {
    userPlaylist: {},
    isLoading: false,
    isError: false,
};

export const getUserPlSlice = createSlice({
    name: "userPlaylist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserPl.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getUserPl.fulfilled, (state, action) => {
                state.userPlaylist = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getUserPl.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function

export default getUserPlSlice.reducer;
