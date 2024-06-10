import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION, LGIN_BG } from "../utils/constants";
import { searchLang } from "../utils/lingualConstant";
import openai from "../utils/openai"
import { addSearchedMoviesByAi } from "../utils/searchToggleSlice";


const SearchBar = ()=>{
    const language = useSelector((store) => store.languageChange.language);
    const searchTxt = useRef(null)
    const dispatch = useDispatch();

    const serachMovieTmdb = async (movie)=>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTION);

      const json = await data.json();
      return json
    }

    const handleGptSearchTxt = async (e)=>{
      e.preventDefault();

      const searchContent = "Give the suggestion of movies only based on the content: "+searchTxt.current.value+ " Only give 5 movies suggestions with comma seprated. I donot want numbering of the movies I only want the 5 movies seperated by commas(,)";

      const gptSearchResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: searchContent }],
        model: 'gpt-3.5-turbo',
      });

      const searchedAiMovies = gptSearchResults?.choices[0]?.message.content.split(",")

      const data = searchedAiMovies.map(movie=>serachMovieTmdb(movie));

      const tmdbResults =await Promise.all(data);

      dispatch(addSearchedMoviesByAi({aiSearchResults:searchedAiMovies, tmdbSearchResults:tmdbResults}));

      searchTxt.current.value=""

    }


    return (
      <div>
          <div className="absolute -z-10">
          <img
            src={LGIN_BG}
            alt="BackGround"
          />
        </div>
        <div className="w-[50%] m-auto pt-28">
          <form className=" bg-black h-20 flex align-middle rounded-lg opacity-70">
            <input
            ref={searchTxt}
              type="text"
              placeholder={searchLang[language].placeholderTxt}
              className="border border-black m-2 my-4 rounded-lg w-[80%]"
            />
            <button className="bg-red-700 rounded-lg w-[15%] my-4" onClick={handleGptSearchTxt}>
              {searchLang[language].searchTxt}
            </button>
          </form>
        </div>
      </div>
    );
}

export default SearchBar;