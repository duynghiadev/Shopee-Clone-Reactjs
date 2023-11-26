import { createAsyncThunk } from '@reduxjs/toolkit'
import purchaseApi from 'src/api/purchase.api'
import { payloadCreator } from 'src/utils/helper'

export const getPurchases = createAsyncThunk(
  'user/getPurchases',
  payloadCreator(purchaseApi.getPurchases)
)
