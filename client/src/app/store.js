import {configureStore} from '@reduxjs/toolkit'
import {PostReducer} from '../features/postSlice.js'

const store = configureStore({
    reducer : PostReducer,
})

export default store 