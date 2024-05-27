import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { playlistroute } from "../../controller/playlist";

export const fetchPlayList = createAsyncThunk(
  "playlsit/getplaylist",
  async (id) => {
    const response = await playlistroute(id);
    console.log("oooooo");
    return response.DT.data;
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
      const playlist = state.playlist;
      console.log(JSON.stringify(playlist));
      if (playlist  && playlist.song) {
        const songs = playlist.song;
        for (let i = songs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [songs[i], songs[j]] = [songs[j], songs[i]];
        }
        localStorage.setItem("playlistRandom", JSON.stringify(songs));
      } else {
        console.log("Dữ liệu playlist không tồn tại.");
      }
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
