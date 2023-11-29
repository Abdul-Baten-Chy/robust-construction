/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useEmployee from "../Hooks/useEmployee";
import useUsers from "../Hooks/useUsers";


const EmployeeRoute = ({children}) => {
    const {user, loading}= useUsers()
    const location = useLocation()
    const  [isEmployee, isEmployeeLoading]= useEmployee()

    if(loading || isEmployeeLoading ){
        return <span className="loading loading-bars loading-lg "></span>
    }
    if(user && isEmployee){
        return children
    }else{
       return <Navigate state={location.pathname} to={'/signIn'} replace></Navigate>
    }

};

export default EmployeeRoute;