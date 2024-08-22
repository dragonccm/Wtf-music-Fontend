import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSongData } from "../../services/SongService";
import { addHisFetch } from "../../services/upDateHService";
import { addRanking } from "../../controller/rating";
export const fetchSongPlaying = createAsyncThunk(
  "getSongPlaying",
  
  async (id ,{ getState }) => {
    const state = getState();
    const isAuthenticated = state.Authentication.defaultUser.isAuthenticated;
    await addRanking(id)
    if (isAuthenticated) {
      await addHisFetch({
        id: id,
        type:"song"
      })
    }
    const response = await getSongData(id);
    return response;
  }
);
const initialState = {
  isPlaying: false,
  playStatus: false,
  currentMusicIndex:0,
  inforSong: {
    isLoading: true,
    isError: true,
    infor: {},
  },
};

export const getSongDataSlice = createSlice({
  name: "getSongPlaying",
  initialState,
  reducers: {
    increment: (state) => {
      state.currentMusicIndex += 1
    },
    decrement: (state) => {
        state.currentMusicIndex -= 1
    },
    update: (state,index) => {
      state.currentMusicIndex = index.payload
    },
    reset: (state) => {
      state.isPlaying = false
      state.currentMusicIndex=0
      state.inforSong= {
        isLoading: true,
        isError: true,
        infor: {},
      }
    },
    toPlay: (state,index) => {
      state.playStatus = !state.playStatus
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchSongPlaying.pending, (state, action) => {
        // Add user to the state array
        state.inforSong = { ...state.inforSong, isLoading: true,isError:false };
        
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
            isError:false,
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
          state.playStatus = false;
          localStorage.setItem("idSongPlaying",id)
        } else {
          state.inforSong = { ...state.inforSong, isLoading: false, isError:true };
          state.isPlaying = false;
          state.playStatus = false;

        }
      })
      .addCase(fetchSongPlaying.rejected, (state, action) => {
        state.inforSong = { ...state.inforSong, isLoading: false,isError:true  };
        state.isPlaying = false;
        state.playStatus = false;

      });
  },
});

// Action creators are generated for each case reducer function
export const { decrement, increment,update,reset,toPlay} = getSongDataSlice.actions

export default getSongDataSlice.reducer;
