import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slide/counterSlice'
import songReducer from './slide/songSlice'
import songPageReducer from './slide/songPageSlice'

import homeReducer from './slide/homeSlice'
import top100Reducer from './slide/top100Slice'
import ratingReducer from './slide/ratingSlice'
import playlistReducer from './slide/playlistSlice'
import AdminHomeReducer from './slide/adminHomeSlice'
import AuthenticationRedecer from './slide/AuthenticationSlice'
import ArtistReducer from './slide/artistSlice'
import getSongDataReducer from './slide/songPlayingSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    song: songReducer,
    songPage:songPageReducer,
    home: homeReducer,
    top100: top100Reducer,
    rating: ratingReducer,
    playlist: playlistReducer,
    admin: AdminHomeReducer,
    Authentication:AuthenticationRedecer,
    Artist: ArtistReducer,
    getSongData:getSongDataReducer
  },
})