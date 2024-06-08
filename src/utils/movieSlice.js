import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie: null,
        trailerVideo: null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovie: (state,action)=>{
            state.nowPlayingMovie = action.payload
        },
        addPopularMovie: (state,action)=>{
            state.popularMovies = action.payload
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state,action)=>{
            state.upcomingMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovie,addTrailerVideo,addPopularMovie,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;