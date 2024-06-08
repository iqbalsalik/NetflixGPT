import { IMG_API_URL } from "../utils/constants";

const MovieCards = ({porterPath})=>{
    return <div className="w-36 mx-2">
        <img src={IMG_API_URL+porterPath} alt="Movie Poster" />
    </div>
}
export default MovieCards;