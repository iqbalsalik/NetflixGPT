import Login from "./Login";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Browser from "./Browser";

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

const Body = ()=>{
    return <RouterProvider router={router} />
}

export default Body;