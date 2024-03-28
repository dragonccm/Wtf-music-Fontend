import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSongData } from "../../services/SongService";
export const fetchSongPlaying = createAsyncThunk(
  "getSongPlaying",
  async (id) => {
    const response = await getSongData(id);
    // console.log(response)
    return response;
  }
);
const initialState = {
  isPlaying: false,
  inforSong: {
    isLoading: true,
    infor: {},
  },
};

export const getSongDataSlice = createSlice({
  name: "getSongPlaying",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchSongPlaying.pending, (state, action) => {
        // Add user to the state array
        state.inforSong = { ...state.inforSong, isLoading: true };

      })
      .addCase(fetchSongPlaying.fulfilled, (state, action) => {
        if (action.payload) {
          let id = action.payload.id;

          let img = action.payload.img;
          let songname = action.payload.songname;
          let artistInfo = action.payload.artistInfo;
          let alias = action.payload.alias;
          let song = action.payload.song;
          let duration = action.payload.duration;
          let lyricsString = action.payload.lyricsString;
          let like = action.payload.like;
          let listen = action.payload.listen;
          let composers = action.payload.composers;
          let album = action.payload.album;
          let genres = action.payload.genres;



          let data = {
            isLoading: false,
            infor: {
              id,
              img,
              songname,
              artistInfo,
              composers,
              alias,
              song,
              duration,
              lyricsString,
              like,
              listen,
              album,genres
            },
          };
          state.inforSong = data;
          state.isPlaying = true;
          localStorage.setItem("idSongPlaying",id)
        } else {
          state.inforSong = { ...state.inforSong, isLoading: false };
          state.isPlaying = false;

        }
      })
      .addCase(fetchSongPlaying.rejected, (state, action) => {
        state.inforSong = { ...state.inforSong, isLoading: false };
        state.isPlaying = false;

      });
  },
});

// Action creators are generated for each case reducer function

export default getSongDataSlice.reducer;
