import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  return fetch('https://625ce66795cd5855d61789dc.mockapi.io/table').then(
    (res) => res.json(),
  )
})
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = true
      state.posts = action.payload
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false
    },
  },
})

export default postSlice.reducer
