import axios from "axios";

const axiosPublic= axios.create({
    // baseURL: 'server-sides-rosy.vercel.app'
    baseURL: 'http://localhost:5000'
})

const useAxiosPub = () => {
    return axiosPublic
        
};

export default useAxiosPub;