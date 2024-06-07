import Login from "./Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browser";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;
