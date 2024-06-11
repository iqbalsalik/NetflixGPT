import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  return (
    movies &&
    <div className=" m-2 md:mt-16">
      <h1 className=" text-md md:text-2xl ml-5 md:ml-11 text-white">{title}</h1>
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
