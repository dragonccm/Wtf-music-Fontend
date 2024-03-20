import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slide/counterSlice'
import songReducer from './slide/songSlice'
import homeReducer from './slide/homeSlice'
export const store = configureStore({
    reducer: {
    counter: counterReducer,
    song: songReducer,
    home: homeReducer,
      
    },
  })