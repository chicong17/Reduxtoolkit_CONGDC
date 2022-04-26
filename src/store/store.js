import { configureStore } from '@reduxjs/toolkit'
import PostReducer from './features/lorem/loremSlice'

const store = configureStore({
  reducer: {
    post: PostReducer,
  },
})
export default store
