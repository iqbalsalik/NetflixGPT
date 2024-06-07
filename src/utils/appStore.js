import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import movieReducers from "./movieSlice"

const appStore = configureStore({
    reducer:{
        user:userReducers,
        movie: movieReducers
    }
})

export default appStore;