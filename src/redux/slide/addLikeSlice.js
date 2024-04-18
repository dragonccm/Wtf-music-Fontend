import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addLikeService } from "../../services/addLikeService";

export const postLike = createAsyncThunk("newlike/createlike", async (data) => {
    const response = await addLikeService(data);
    return response
});
const initialState = {
    newlike: {},
    isLoading: false,
    isError: false,
};

export const addLikelice = createSlice({
    name: "newlike",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postLike.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(postLike.fulfilled, (state, action) => {
                state.newlike = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(postLike.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function

export default addLikelice.reducer;
