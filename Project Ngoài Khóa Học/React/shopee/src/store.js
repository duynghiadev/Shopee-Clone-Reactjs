import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import appReducer from './app.slice'
import authReducer from './pages/Auth/auth.slice'
import cartReducer from './pages/Cart/cart.slice'

const rootReducer = {
  auth: authReducer,
  app: appReducer,
  cart: cartReducer
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...getDefaultMiddleware({ serializableCheck: false })]
})

export default store
