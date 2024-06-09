import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import SearchPage from "./SearchPage";

const Browser = () => {
  const searchBarToggle = useSelector((store) => store.gptSearchToggle.toggle);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {searchBarToggle ? (
        <SearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />{" "}
        </>
      )}
    </div>
  );
};

export default Browser;
