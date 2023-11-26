import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import purchaseApi from 'src/api/purchase.api'
import { payloadCreator } from 'src/utils/helper'
import { logout } from '../Auth/auth.slice'

export const getCartPurchases = createAsyncThunk(
  'cart/getCartPurchases',
  payloadCreator(purchaseApi.getCartPurchases)
)

export const updatePurchase = createAsyncThunk(
  'cart/updatePurchase',
  payloadCreator(purchaseApi.updatePurchase)
)

export const deletePurchases = createAsyncThunk(
  'cart/deletePurchases',
  payloadCreator(purchaseApi.deletePurchases)
)

export const buyPurchases = createAsyncThunk(
  'cart/buyPurchases',
  payloadCreator(purchaseApi.buyPurchases)
)

const cart = createSlice({
  name: 'cart',
  initialState: {
    purchases: []
  },
  extraReducers: {
    [getCartPurchases.fulfilled]: (state, action) => {
      state.purchases = action.payload.data
    },
    [logout.fulfilled]: state => {
      state.purchases = []
    }
  }
})

const cartReducer = cart.reducer
export default cartReducer
