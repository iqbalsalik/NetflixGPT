import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browser = ()=>{
   useNowPlayingMovies();

    return <div>
        <Header/>
        <MainContainer/>
        <SecondryContainer/>
    </div>
}

export default Browser;