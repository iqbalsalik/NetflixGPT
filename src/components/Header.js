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
    <div className="absolute bg-gradient-to-b from-black w-full flex justify-between z-10">
      <img className="w-56" src={NTFX_LOGO} alt="logo" />

      {user && (
        <div className="flex">
          {searchBarToggle && 
          <select className="bg-gray-500 w-20 m-6 rounded-lg text-white" onChange={handleLanguageSelecter}>
           { SUPPORTED_LANGUAGE.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
           )}
          </select>
          }
          <button className="bg-purple-800 p-3 m-6 rounded-lg" onClick={handleSearchBarToggle}>{searchBarToggle?"Home":"SearchGPT"}</button>
          <h1 className=" w-8 font-bold text-white text-2xl my-8 border rounded-full text-center bg-slate-500">
            {user?.displayName?.split("")[0]}
          </h1>
          <button
            className="m-8 text-white cursor-pointer"
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
