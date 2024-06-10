import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION, TMDB_UPCOMING_API } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    const listOfUpcomingMovies = useSelector(store=>store?.movie?.upcomingMovies)
   
    const getUpcomingMovies = async ()=>{
        const data = await fetch(TMDB_UPCOMING_API, API_OPTION);

        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
      !listOfUpcomingMovies && getUpcomingMovies()
    },[])
}

export default useUpcomingMovies;