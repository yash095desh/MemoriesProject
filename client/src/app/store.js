import {configureStore} from '@reduxjs/toolkit'
import PostSlice from '../features/Post/postSlice'

export const store = configureStore({
    reducer : PostSlice,
})