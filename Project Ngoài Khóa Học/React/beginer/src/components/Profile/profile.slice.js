import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserApi } from '../../api'

export const getUser = createAsyncThunk('profile/getUser', async (params, thunkAPI) => {
  try {
    const response = await getUserApi()
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {},
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.profile = action.payload
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})

const profileReducer = profileSlice.reducer

export default profileReducer
