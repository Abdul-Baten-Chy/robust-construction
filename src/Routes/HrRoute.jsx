/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useHr from "../Hooks/useHr";


const HrRoute = ({children}) => {
    const {user, loading}=useAuth()
    const location =useLocation()
    const [isHr, isHrLoading]= useHr()

    
if(loading || isHrLoading ){
        return <span className="loading loading-bars loading-lg "></span>
    }

    if(user && isHr ){
        return children
        
    }else{
       return <Navigate state={location.pathname} to={'/signIn'} replace></Navigate>
    }
};


export default HrRoute;