import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NTFX_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { toggleSearchPage } from "../utils/searchToggleSlice";
import { addUser, removeUser } from "../utils/userSlice";
import { searchLang } from "../utils/lingualConstant";
import { SUPPORTED_LANGUAGE } from "../utils/lingualConstant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const searchBarToggle = useSelector((store) => store.gptSearchToggle.toggle);

  const handleSearchBarToggle = ()=>{
    dispatch(toggleSearchPage());
  }

 const handleLanguageSelecter= (e)=>{
  dispatch(changeLanguage(e.target.value))
 }

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/browser");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      },
      []
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black w-full flex flex-col md:flex-row justify-between z-10">
      <img className= " w-24 md:w-52 m-auto md:m-0" src={NTFX_LOGO} alt="logo" />

      {user && (
        <div className="flex justify-between">
          {searchBarToggle && 
          <select className="bg-gray-500 w-14 h-7 md:h-14 md:w-20 m-3 md:m-6 rounded-lg text-white" onChange={handleLanguageSelecter}>
           { SUPPORTED_LANGUAGE.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
           )}
          </select>
          }
          <button className="bg-purple-800 p-0 h-7 w-20 md:w-24 md:h-14 md:p-3 m-3 md:m-6 rounded-lg" onClick={handleSearchBarToggle}>{searchBarToggle?"Home":"SearchGPT"}</button>
          <h1 className="hidden md:block w-8 font-bold text-white text-2xl my-8 border rounded-full text-center bg-slate-500">
            {user?.displayName?.split("")[0]}
          </h1>
          <button
            className="m-3 md:m-6 md:m-8 text-white cursor-pointer"
            onClick={signOutHandler}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
