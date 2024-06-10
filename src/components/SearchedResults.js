import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SearchedResults = ()=>{

    const searchedAiResult = useSelector(store=>store?.gptSearchToggle?.searchedMoviesByAi);
    const searchedTmdbResults = useSelector(store=>store?.gptSearchToggle?.searchedTmdbResults)
    return searchedTmdbResults && <div className="bg-black opacity-95">
        {searchedAiResult.map((movie,index)=><MovieList key={movie} title={movie} movies={searchedTmdbResults[index].results} />)}
    </div>
}

export default SearchedResults;