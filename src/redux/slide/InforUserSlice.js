import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserInfo,EditUserInfo } from "../../controller/user";

export const getInforUser = createAsyncThunk("getInforUser", async () => {
    const response = await UserInfo();
    return response
});
export const editInforUser = createAsyncThunk("editInforUser", async (infor) => {
    const response = await EditUserInfo(infor);
    return response
});
const initialState = {
    userInfor: {},
    myHistory: {},
    userPlaylist: [],
    userlikedSongs: [],
    userBlocked:[],
    isLoading: false,
    isError: false,
};

export const InforUserslice = createSlice({
    name: "Infor",
    initialState,
    reducers: {
        editInfor: (state, action) => {
            state.userInfor = action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        setHistory: (state, action) => {
            state.myHistory = action.payload;
        },
        setUserPlaylist: (state, action) => {
            state.userPlaylist = action.payload;
        },
        AddUserPlaylist: (state, action) => {
            const playlistToUpdate = state.userPlaylist.find(playlist => playlist.playlistId === action.payload.playlistId);
            playlistToUpdate.songid.push(action.payload.songId);
            state.userPlaylist = playlistToUpdate;
        },
        setUserlikedSong: (state, action) => {
            state.userlikedSongs = action.payload;
        },
        setUserBlocked: (state, action) => {
            state.userBlocked = action.payload;
        },
        removeUserBlocked: (state, action) => {
            const updatedPlaylists = state.userBlocked.filter(playlist => playlist.id !== action.payload);
            state.userBlocked = updatedPlaylists;
        },
      },
    extraReducers: (builder) => {
        builder
            .addCase(getInforUser.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getInforUser.fulfilled, (state, action) => {
                state.userInfor = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getInforUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            
            .addCase(editInforUser.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(editInforUser.fulfilled, (state, action) => {
                state.userInfor = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(editInforUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function
export const { editInfor, setHistory, setUserPlaylist,
    setUserlikedSong, AddUserPlaylist, setUserBlocked,removeUserBlocked } = InforUserslice.actions
export default InforUserslice.reducer;
