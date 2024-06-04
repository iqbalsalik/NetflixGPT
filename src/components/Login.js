import { useState } from "react";
import Header from "./Header";

const Login = ()=>{

    const [signIn,setSignIn] = useState(true);

    const signUpHandler = ()=>{
        setSignIn(!signIn)
    }

    return <div>
        <Header/>
        <div >
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="BackGround" />
        </div>
        <div className="w-3/12 m-auto absolute top-24 left-1/3 bg-black h-auto rounded-lg text-white opacity-80">
            <h1 className="font-bold text-2xl m-3 p-2">{signIn?"Sign Up":"Sign In"}</h1>
        <form className=" flex flex-col ">
            {signIn && <input className="bg-gray-800 m-3 rounded-lg p-2 border border-white" type="text" placeholder="Full Name" />}
        
            <input className="bg-gray-800 m-3 rounded-lg p-2 border border-white " type="text" placeholder="@ Email Adress" />
            <input className="bg-gray-800 m-3 rounded-lg p-2 border border-white" type="password" placeholder="Password" />
            <button className="bg-red-700 m-3 rounded-lg p-2">{signIn?"Sign Up":"Sign In"}</button>
        </form>
        <p className="m-3 p-2 cursor-pointer" onClick={signUpHandler}>{signIn?"Already Registered? Sign In now.":"New to Netflix? Sign Up now."} </p>
        </div>

       
       
        
    </div>
}

export default Login;