import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slide/counterSlice'
import songReducer from './slide/songSlice'
import homeReducer from './slide/homeSlice'
import top100Reducer from './slide/top100Slice'
import ratingReducer from './slide/ratingSlice'
import playlistReducer from './slide/playlistSlice'
import AdminHomeReducer from './slide/adminHomeSlice'



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    song: songReducer,
    home: homeReducer,
    top100: top100Reducer,
    rating: ratingReducer,
    playlist: playlistReducer,
    admin:AdminHomeReducer
  },
})