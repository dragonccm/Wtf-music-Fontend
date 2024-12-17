import { configureStore } from "@reduxjs/toolkit";



import songPageReducer from "./slide/songPageSlice";
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
import creataPlReducer from "./slide/createplaylistSlice";
import getUserPlReducer from "./slide/getUserPlaylistSlice";
import adSongToPlReducer from "./slide/adSongToPlaylistSlice";
import getUserLikedSongsReducer from "./slide/getUserLikedSongs";
import myHistoryReducer from "./slide/myHistory";
import themeReducer from "./slide/themeSlice";
import sliderReducer from "./slide/silderSlice";

export const store = configureStore({
    reducer: {
        songPage: songPageReducer,
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
        creataPl: creataPlReducer,
        getUserPl: getUserPlReducer,
        adSongToPl: adSongToPlReducer,
        ulikedSongs: getUserLikedSongsReducer,
        myHistory: myHistoryReducer,
        theme:themeReducer,
        slider: sliderReducer
    },
    devTools: true,
    
});
