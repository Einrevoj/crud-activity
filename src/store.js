import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/deleteUser';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})