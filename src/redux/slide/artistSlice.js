import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getArtist } from "../../services/artistsService";

export const fetchgArtist = createAsyncThunk("Artist/getArtist", async (id) => {
    const response = await getArtist(id);
    const handleData = (data) => {
        if (data && data.sections && data.sections[1] && data.sections[1].items) {
            return {
                name: data.name,
                img: data.thumbnailM,
                totalFollow: data.totalFollow,
                biography: data.biography,
                playlist: data.sections[1].items.map((item) => ({
                    id: item.encodeId,
                    name: item.title,
                    thumbnailM: item.thumbnailM.replace('w165', 'w320'),
                    artists_list: item.artists ? item.artists.map((artist) => artist.name) : [],
                })),
                songFavorite: data.sections[0].items.map((item) => ({
                    id: item.encodeId,
                    name: item.title,
                    img: item.thumbnailM,
                    artist: item.artists ? item.artists.map((artist) => artist.name) : [],
                })),
            };
        } else {
            return {}; // Trả về giá trị rỗng nếu không có dữ liệu
        }
    };
    const curr = handleData(response.data)
    return curr;
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
