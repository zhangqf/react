import { configureStore } from '@reduxjs/toolkit'
import countreReducer from './modules/channlStore'
import userReducer from './modules/user'
import messageReducer from './modules/globalMessage'

const store = configureStore({
  reducer: {
    counter: countreReducer,
    user: userReducer,
    message: messageReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>;
export default store