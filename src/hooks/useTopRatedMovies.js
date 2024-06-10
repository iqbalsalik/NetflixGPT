import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION, TMDB_TOPRATED_API } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch()

    const listOfTopRatedMovies = useSelector(store=>store?.movie?.topRatedMovies)
   
    const getTopRatedMovies = async ()=>{
        const data = await fetch(TMDB_TOPRATED_API, API_OPTION);

        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        !listOfTopRatedMovies && getTopRatedMovies()
    },[])
}

export default useTopRatedMovies;