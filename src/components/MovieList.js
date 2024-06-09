import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  return (
    movies &&
    <div className=" mt-6">
      <h1 className="text-2xl ml-11 text-white">{title}</h1>
      <div className="mt-4 ml-10 flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCards key={movie.id} porterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
