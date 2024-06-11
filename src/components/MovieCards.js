import { IMG_API_URL } from "../utils/constants";

const MovieCards = ({porterPath})=>{
    return <div className="w-24 md:w-36 mx-1 md:mx-2">
        <img src={IMG_API_URL+porterPath} alt="Movie Poster" />
    </div>
}
export default MovieCards;