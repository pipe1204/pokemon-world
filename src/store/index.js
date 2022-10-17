import { configureStore } from "@reduxjs/toolkit";
import user from './slices/userName.slice'

export default configureStore({
    reducer: {
        user,
    }
})