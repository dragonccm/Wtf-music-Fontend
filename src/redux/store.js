import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./slide/homeSlice";

import InforUserReducer from "./slide/InforUserSlice";
import top100Reducer from "./slide/top100Slice";
import ratingReducer from "./slide/ratingSlice";
import playlistReducer from "./slide/playlistSlice";
import AdminHomeReducer from "./slide/adminHomeSlice";
import AuthenticationRedecer from "./slide/AuthenticationSlice";
import ArtistReducer from "./slide/artistSlice";
import GenresReducer from "./slide/genresSlice";
import getSongDataReducer from "./slide/songPlayingSlice";
import themeReducer from "./slide/themeSlice";

export const store = configureStore({
    reducer: {
        home: homeReducer,
        top100: top100Reducer,
        rating: ratingReducer,
        playlist: playlistReducer,
        admin: AdminHomeReducer,
        Authentication: AuthenticationRedecer,
        Artist: ArtistReducer,
        Genres: GenresReducer,
        getSongData: getSongDataReducer,
        inforUser: InforUserReducer,
        theme:themeReducer
    },
    devTools: true,
    
});
