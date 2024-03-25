import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminService } from "../../services/adminService";

export const fetchAdminHome = createAsyncThunk("admin/adminService", async () => {
    const response = await adminService();
    return response
});
const initialState = {
    AdminHome: {},
    isLoading: false,
    isError: false,
};

export const AdminHomeslice = createSlice({
    name: "AdminHome",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminHome.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAdminHome.fulfilled, (state, action) => {
                state.AdminHome = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAdminHome.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function

export default AdminHomeslice.reducer;
