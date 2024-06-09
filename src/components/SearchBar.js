import { useSelector } from "react-redux";
import { LGIN_BG } from "../utils/constants";
import { searchLang } from "../utils/lingualConstant";


const SearchBar = ()=>{
    const language = useSelector((store) => store.languageChange.language);
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
              type="text"
              placeholder={searchLang[language].placeholderTxt}
              className="border border-black m-2 my-4 rounded-lg w-[80%]"
            />
            <button className="bg-red-700 rounded-lg w-[15%] my-4">
              {searchLang[language].searchTxt}
            </button>
          </form>
        </div>
      </div>
    );
}

export default SearchBar;