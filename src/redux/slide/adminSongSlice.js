import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminGetSong } from "../../services/adminSongService";

export const fetchAdminSong = createAsyncThunk("admin/adminGetSong", async () => {
    const response = await adminGetSong();
    console.log(response)
    // const final = response.map((data) => {
    //     const cu = {
    //         id: "1",
    //         avt: data.thumbnail,
    //         song: data.songname,
    //         category: data.genresid.join(', '),
    //         writer: data.artistsId.join(', '),
    //         singerName: data.artistsId.join(', '),
    //         listener: data.listen,
    //         review: data.like,
    //         description: ""
    //     }
    //     console.log(cu);
    //     return cu
    // });
    return response
});
const initialState = {
    AdminSong: {},
    isLoading: false,
    isError: false,
};

export const AdminSongslice = createSlice({
    name: "AdminSong",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminSong.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAdminSong.fulfilled, (state, action) => {
                state.AdminSong = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAdminSong.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Action creators are generated for each case reducer function

export default AdminSongslice.reducer;
