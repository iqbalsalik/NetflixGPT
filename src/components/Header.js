import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NTFX_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    },[]);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-56"
        src= {NTFX_LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex">
          <h1 className=" w-8 font-bold text-white text-2xl my-8 border rounded-full text-center bg-slate-500">
            {user?.displayName?.split("")[0]}
          </h1>
          <button className="m-8 text-white" onClick={signOutHandler}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
