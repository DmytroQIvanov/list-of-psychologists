import { configureStore } from '@reduxjs/toolkit'
import  usersSlice  from './users'
import { useDispatch } from 'react-redux'
// ...
const store = configureStore({
  reducer: usersSlice,
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>;

export default store