import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovie);

  if (movies === null || movies === undefined || !movies) {
    return;
  }

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="bg-gradient-to-r from-black top-20 h-auto md:h-screen">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
