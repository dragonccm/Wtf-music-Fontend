import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPlaylist } from "../../services/playlistService";

export const fetchPlayList = createAsyncThunk("playlsit/getplaylist", async (id) => {
    const response = await getPlaylist(id);
    return response
});
const initialState = {
    playlist: {},
    isLoading: false,
    isError: false,
};

export const Playlistslice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        banSongs: (state, id) => {
            console.log(id)
            state.playlist = {
                ...state.playlist,
                data: {
                  ...state.playlist.data,
                  song: {
                    ...state.playlist.data.song,
                    items: state.playlist.data.song.items.filter(item => item.encodeId !== `${id.payload}`)
                  }
                }
              };
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlayList.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPlayList.fulfilled, (state, action) => {
                state.playlist = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchPlayList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});
export const { banSongs} = Playlistslice.actions

// Action creators are generated for each case reducer function

export default Playlistslice.reducer;
