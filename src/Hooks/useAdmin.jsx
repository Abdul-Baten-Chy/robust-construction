import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {data: isAdmin, isPending: isAdminLoading}= useQuery({
        queryKey:['isAdmin'],
        queryFn: async()=>{
            const res =await axiosSecure.get(`/users/role/${user.email}`)
            const admin = res.data.role === 'Admin'
            return admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;