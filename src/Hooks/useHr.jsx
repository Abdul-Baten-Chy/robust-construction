import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useHr = () => {

    const {user}= useAuth()
    const axiosSecure = useAxiosSecure()
    
    const {data: isHr, isPending: isHrLoading}= useQuery({
        queryKey:['onlyHr'],
        queryFn:async()=>{
            const res =await axiosSecure.get(`/users/role/${user.email}`)
            const hr = res.data.role === 'Hr Manager'
            return hr
        }
        
    })
  
    return [isHr, isHrLoading]
};

export default useHr;