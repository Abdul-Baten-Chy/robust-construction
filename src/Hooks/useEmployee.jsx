import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useEmployee = () => {
    const {user}= useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: isEmployee, isPending: isEmployeeLoading} =useQuery({
        queryKey:['isEmployee'],
        queryFn:async()=>{
         const res = await axiosSecure.get(`/users/role/${user.email}`)
         const employee = res.data.role === 'Employee'
         return employee

        }
        
    })

    return [isEmployee, isEmployeeLoading]
};

export default useEmployee;