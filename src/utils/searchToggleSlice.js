import { createSlice } from "@reduxjs/toolkit";

const searchToggleSlice = createSlice({
    name:"search",
    initialState:{
        toggle:false,
        searchedMoviesByAi:null,
        searchedTmdbResults:null
    },
    reducers:{
        toggleSearchPage:(state,action)=>{
            state.toggle = !state.toggle
        },
        addSearchedMoviesByAi:(state,action)=>{
           const {aiSearchResults,tmdbSearchResults}= action.payload
            state.searchedMoviesByAi = aiSearchResults;
            state.searchedTmdbResults = tmdbSearchResults;
        }
    }
});

export const { toggleSearchPage,addSearchedMoviesByAi} = searchToggleSlice.actions;

export default searchToggleSlice.reducer;