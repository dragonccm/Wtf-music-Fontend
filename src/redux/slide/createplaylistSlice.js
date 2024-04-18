import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createplaylistService } from "../../services/createplaylistService";

export const createPl = createAsyncThunk("newPlaylist/createPlaylist", async (data) => {
    const response = await createplaylistService(data);
    return response
});
const initialState = {
    newPlaylist: {},
    isLoading: false,
    isError: false,
};

export const creataPlSlice = createSlice({
    name: "newPlaylist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPl.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createPl.fulfilled, (state, action) => {
                state.newPlaylist = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(createPl.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function

export default creataPlSlice.reducer;
