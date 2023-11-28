import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Dashboard from "../Pages/dashboard/Dashboard";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Private from "./Private";
import EmployeeList from "../Pages/dashboard/EmployeeList";
import Progress from "../Pages/dashboard/Progress";
import HrRoute from "./HrRoute";
import AllEmplyeeList from "../Pages/dashboard/AllEmplyeeList";
import AdminRoute from "./AdminRoute";



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
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
        {
          path:"/signIn",
          element:<SignIn></SignIn>
        }
      ]
    },
    {
      path:"dashboard",
      element:<Private><Dashboard></Dashboard></Private>,
      children:[
        {
          path:"employee-list",
          element:<HrRoute><EmployeeList></EmployeeList></HrRoute>
        },
        {
          path:"progress",
          element:<Progress></Progress>
        },
        {
          path:"allemployee",
          element:<AdminRoute><AllEmplyeeList></AllEmplyeeList></AdminRoute>
        }
      ]
    }
  ]);

export default router  