import {combineReducers, } from '@reduxjs/toolkit'
import usersSlice from './users'

export const rootReducer = combineReducers({
    users:usersSlice
})
export type RootState = ReturnType<typeof rootReducer>
