import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getArtist } from "../../services/artistsService";

    export const fetchgArtist = createAsyncThunk("Artist/getArtist", async (id) => {
        const response = await getArtist(id);
        return response;
    });
const initialState = {
    Artist: {},
    isLoading: false,
    isError: false,
};

export const Artistslice = createSlice({
    name: "Artist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchgArtist.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchgArtist.fulfilled, (state, action) => {
                console.log(action.payload);
                state.Artist = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchgArtist.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function

export default Artistslice.reducer;
