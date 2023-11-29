import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center max-h-screen">
            <Link to={'/'}><img src="https://file.mockplus.com/image/2018/02/b2eaaf72-8f21-4390-b113-b5b6fc98261c.jpg" alt="" className="block"/></Link>
        </div>
    );
};

export default Error;