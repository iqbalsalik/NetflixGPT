import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import movieReducers from "./movieSlice";
import toggleReducer from "./searchToggleSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer:{
        user:userReducers,
        movie: movieReducers,
        gptSearchToggle: toggleReducer,
        languageChange: configReducer
    }
})

export default appStore;