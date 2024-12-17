import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getUserAccount} from "../../controller/user";
export const fetchAuthentication = createAsyncThunk(
  "getAuthentication",
  async () => {
    const response = await getUserAccount();
    return response;
  }
);
const initialState = {
  defaultUser: {
    isLoading: true,
    isAuthenticated: false,
    token: "",
    account: {},
  },
  blockSong:[]
};
const initState = {
  isLoading: true,
  isAuthenticated: false,
  token: "",
  account: {},
}
export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginer: (state, action) => {
      state.defaultUser = { ...action.payload, isLoading: false };
    },
    logouter: (state) => {
      state.defaultUser = { ...initState, isLoading: false };
    },
    addlike: (state) => {
      state.defaultUser = { ...initState, account: state.account};
    },
    ChangeBlockList: (state,action) => {
      state.blockSong = action.payload
    },
    editAvt: (state,action) => {
      state.defaultUser = {
        ...state.defaultUser,
        account: {
          ...state.defaultUser.account,
          avt: action.payload 
        }
       };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAuthentication.pending, (state, action) => {
        // Add user to the state array
        state.defaultUser.isLoading = true;
        state.defaultUser.isError = false;
      })
      .addCase(fetchAuthentication.fulfilled, (state, action) => {
        if (action.payload && action.payload.EC === "0") {
          let avt = action.payload.DT.avt;
          let token = action.payload.DT.access_token;
          let myPlayLists = action.payload.DT.myPlayLists;
          let likedSongs = action.payload.DT.likedSongs;
          let likedPlayLists = action.payload.DT.likedPlayLists;
          let isAdmin = action.payload.DT.isAdmin;
          let isBAn = action.payload.DT.isBan;
          let id = action.payload.DT.id;
          let type_login = action.payload.DT.type_login;
          let data = {
            isAuthenticated: true,
            token: token,
            account: { avt,myPlayLists,likedSongs,likedPlayLists,isAdmin,isBAn,id,type_login },
            isLoading: false,
          };
          state.defaultUser = data;
          state.blockSong = action.payload.DT.blockSong;
        } else {
            state.defaultUser = { ...state.defaultUser, isLoading: false };
        }
      })
      .addCase(fetchAuthentication.rejected, (state, action) => {
        state.defaultUser.isLoading = false;
        state.defaultUser.isError = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { loginer, logouter,editAvt,ChangeBlockList} = authenticationSlice.actions

export default authenticationSlice.reducer;
