import { useContext } from "react";
import { MyAuthContext } from "../Components/context/AuthProvider";


const useAuth = () => {
   const auth = useContext(MyAuthContext)
   return auth
};

export default useAuth;