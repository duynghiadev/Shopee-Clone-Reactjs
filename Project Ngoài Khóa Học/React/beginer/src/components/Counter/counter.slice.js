import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter', // prefix cho việc tạo action type
  initialState: {
    count: 0
  },
  reducers: {
    increase: (state, action) => {
      state.count = state.count + 1
    },
    decrease: (state, action) => {
      state.count = state.count - 1
    }
  }
})

const counterReducer = counterSlice.reducer
export default counterReducer
export const increase = counterSlice.actions.increase
export const decrease = counterSlice.actions.decrease
