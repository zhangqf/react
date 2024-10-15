import { configureStore } from '@reduxjs/toolkit'
import countreReducer from './modules/channlStore'
import userReducer from './modules/user'

const store = configureStore({
  reducer: {
    counter: countreReducer,
    user: userReducer
  }
})


export type RootState = ReturnType<typeof store.getState>;
export default store