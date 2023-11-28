/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const {user, loading}=useAuth()
    const location =useLocation()
    const [isAdmin, isAdminLoading]= useAdmin()

    
if(loading || isAdminLoading ){
        return <span className="loading loading-bars loading-lg "></span>
    }

    if(user && isAdmin ){
        return children
        
    }else{
       return <Navigate state={location.pathname} to={'/signIn'} replace></Navigate>
    }
};

export default AdminRoute;