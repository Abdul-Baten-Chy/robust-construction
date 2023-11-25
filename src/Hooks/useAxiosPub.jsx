import axios from "axios";

const axiosPublic= axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosPub = () => {
    return axiosPublic
        
};

export default useAxiosPub;