import Login from "./Login";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Browser from "./Browser";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = ()=>{

    const dispatch = useDispatch();

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            } else {
             dispatch(removeUser())
            }
          });
    },[])

    return <RouterProvider router={router} />
}

export default Body;