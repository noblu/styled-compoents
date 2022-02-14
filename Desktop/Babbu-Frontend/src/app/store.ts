import { configureStore } from '@reduxjs/toolkit'
import connectionReducer from '../features/connectionSlice'
import nftMintReducer from '../features/nftMintSlice'

export const store = configureStore({
  reducer: {
      connect: connectionReducer,
      nftMint: nftMintReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
