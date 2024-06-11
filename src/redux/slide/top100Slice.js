import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { gettop100 } from "../../services/top100Service";

export const fetchTop100 = createAsyncThunk("top100/getTop100", async () => {
    const response = await gettop100();
    return response.DT
});
const initialState = {
    top100: {},
    isLoading: false,
    isError: false,
};

export const Top100slice = createSlice({
    name: "top100",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTop100.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchTop100.fulfilled, (state, action) => {
                state.top100 = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchTop100.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function

export default Top100slice.reducer;
