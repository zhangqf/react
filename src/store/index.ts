import { configureStore } from '@reduxjs/toolkit'
import countreReducer from './modules/channlStore'


const store = configureStore({
  reducer: {
    counter: countreReducer
  }
})

export default store