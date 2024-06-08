import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId)=>{
    const dispatch = useDispatch();
    const fetchTrailer = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTION
      );
       const json = await data.json();
       const movieData = json.results.filter((movie) => movie.type == "Trailer");
       const trailer = movieData.length
         ? movieData[0]
         : json.results[0];
  
         dispatch(addTrailerVideo(trailer))
    };
    
  
  
    useEffect(() => {
      fetchTrailer();
    }, []);
}

export default useTrailerVideo;