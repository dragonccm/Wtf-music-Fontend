import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGenres } from "../../services/genresService";

export const fetchGenres = createAsyncThunk("Genres/getGenres", async () => {
    const response = await getGenres();
    console.log(response);
    return response;
});
const initialState = {
    Genres: {},
    isLoading: false,
    isError: false,
};

export const GenresSlice = createSlice({
    name: "Genres",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGenres.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                console.log(action.payload);
                state.Genres = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchGenres.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function

export default GenresSlice.reducer;
