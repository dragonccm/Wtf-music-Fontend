import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserInfo } from "../../controller/user";

export const getInforUser = createAsyncThunk("getInforUser", async () => {
    const response = await UserInfo();
    return response
});
const initialState = {
    userInfor: {},
    isLoading: false,
    isError: false,
};

export const InforUserslice = createSlice({
    name: "newplaylist",
    initialState,
    reducers: {},
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
            });
    },
});

// Action creators are generated for each case reducer function

export default InforUserslice.reducer;
