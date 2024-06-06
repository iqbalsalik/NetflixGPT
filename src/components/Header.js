import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate()

  const user = useSelector(store=>store.user)

  const signOutHandler = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
    
  }

  return (
    <div className="absolute bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-56"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="flex">
        
        <h1 className=" w-8 font-bold text-white text-2xl my-8 border rounded-full text-center bg-slate-500">{user?.displayName?.split("")[0]}</h1>
         <button className="m-8 text-white" onClick={signOutHandler}>Sign Out</button>
      </div> }
    </div>
  );
};

export default Header;
