import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getUserAccount} from "../../controller/user";
export const fetchAuthentication = createAsyncThunk(
  "getAuthentication",
  async () => {
    const response = await getUserAccount();
    // console.log(response)
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
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAuthentication.pending, (state, action) => {
        // Add user to the state array
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAuthentication.fulfilled, (state, action) => {
        if (action.payload && action.payload.EC === "0") {
          let groupWithRoles = action.payload.DT.groupWithRoles;
          let email = action.payload.DT.email;
          let username = action.payload.DT.username;
          let token = action.payload.DT.access_token;
          let data = {
            isAuthenticated: true,
            token: token,
            account: { groupWithRoles, email, username },
            isLoading: false,
          };
          state.defaultUser = data;
        } else {
            state.defaultUser = { ...state.defaultUser, isLoading: false };
        }
      })
      .addCase(fetchAuthentication.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { loginer, logouter} = authenticationSlice.actions

export default authenticationSlice.reducer;