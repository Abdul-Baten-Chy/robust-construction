import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Dashboard from "../Pages/dashboard/Dashboard";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/SignUp/SignUp";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
          path:"/dashboard",
          element:<Dashboard></Dashboard>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

export default router  