import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPlaylist } from "../../services/playlistService";

export const fetchPlayList = createAsyncThunk(
  "playlsit/getplaylist",
  async (id) => {
    const response = await getPlaylist(id);
    return response;
  }
);
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
      console.log(id);
      state.playlist = {
        ...state.playlist,
        data: {
          ...state.playlist.data,
          song: {
            ...state.playlist.data.song,
            items: state.playlist.data.song.items.filter(
              (item) => item.encodeId !== `${id.payload}`
            ),
          },
        },
      };
    },
    randomSongs: (state) => {
      const songs = state.playlist.data.song.items;
      for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]];
      }
      localStorage.setItem("playlistRandom", JSON.stringify(songs));
    },
    updatePlaylist: (state) => {
      state.playlist = {
        ...state.playlist,
        data: {
          ...state.playlist.data,
          song: {
            ...state.playlist.data.song,
            items: JSON.parse(localStorage.getItem("playlistRandom")),
          },
        },
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
export const { banSongs, randomSongs, updatePlaylist } = Playlistslice.actions;

// Action creators are generated for each case reducer function

export default Playlistslice.reducer;
