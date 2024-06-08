import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION, TMDB_NOWPLAYING_API } from "../utils/constants";
import { addNowPlayingMovie } from "../utils/movieSlice";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
   
    const getNowPlayMovies = async ()=>{
        const data = await fetch(TMDB_NOWPLAYING_API, API_OPTION);

        const json = await data.json();
        dispatch(addNowPlayingMovie(json.results))
    }

    useEffect(()=>{
        getNowPlayMovies()
    },[])
}

export default useNowPlayingMovies;