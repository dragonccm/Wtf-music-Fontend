import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getSlideService,
    setSlideService,
    insertSildeService
} from "../../services/silderservice";
export const getSlider = createAsyncThunk("Silder/GetSlide", async (data) => {
    const response = await getSlideService();
    return response
});
export const setSlider = createAsyncThunk("Silder/SetSlide", async (id,data) => {
    const response = await setSlideService(id,data);
    return response
});
export const insertSlider = createAsyncThunk("Silder/InsertSlide", async (data) => {
    const response = await insertSildeService(data);
    return response
});


const initialState = {
    sliderData: [],
    isLoading: false,
    isError: false,
};

export const sliderSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSlider.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getSlider.fulfilled, (state, action) => {
                state.sliderData = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getSlider.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default sliderSlice.reducer;