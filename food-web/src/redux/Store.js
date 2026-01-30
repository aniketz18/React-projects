import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './actions/SearchSlice'
export const store = configureStore({

    reducer: {
        filter : searchReducer,
    },
})