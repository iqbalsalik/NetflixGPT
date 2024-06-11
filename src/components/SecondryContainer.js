import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondryContainer = () => {
  const movies = useSelector((store) => store?.movie);

  if (!movies || !movies.nowPlayingMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black mt-40 md:mt-0">
      <div className="-mt-40 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondryContainer;
