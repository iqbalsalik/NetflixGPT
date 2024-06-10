import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION, TMDB_POPULAR_API } from "../utils/constants";
import { addPopularMovie } from "../utils/movieSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch()

    const listOfPopularMovies = useSelector(sotre=>sotre?.movie?.popularMovies)
   
    const getPopularMovies = async ()=>{
        const data = await fetch(TMDB_POPULAR_API, API_OPTION);

        const json = await data.json();
        dispatch(addPopularMovie(json.results))
    }

    useEffect(()=>{
        !listOfPopularMovies && getPopularMovies()
    },[])
}

export default usePopularMovies;