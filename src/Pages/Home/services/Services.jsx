import { useEffect } from "react";
import SubHead from "../../../Components/SubHead/SubHead";
import useAxiosPub from "../../../Hooks/useAxiosPub";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import Crad from "./Crad";

const Services = () => {
    const axiosPublic = useAxiosPub()
    const {user}= useAuth()
    const { data: services = [] } = useQuery({
        queryKey: ['services', user?.email],
        queryFn: async() => {
            const res = await axiosPublic.get("/services");
            return res.data;
        }})
    return (
        <div>
            <SubHead title={'Our Services'}></SubHead>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
            {
                services.map(service=><Crad key={service._id} service={service}></Crad>)
            }
            </div>

        </div>
    );
};

export default Services;