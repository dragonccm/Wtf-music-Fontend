import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slide/counterSlice'
import songReducer from './slide/songSlice'
import homeReducer from './slide/homeSlice'
import ratingReducer from './slide/ratingSlice'
export const store = configureStore({
    reducer: {
    counter: counterReducer,
    song: songReducer,
    home: homeReducer,
    rating: ratingReducer
      
    },
  })