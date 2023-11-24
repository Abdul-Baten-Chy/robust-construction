import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Shared/NavBar";
import Footer from "../../Components/Shared/Footer";



const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-100px)] max-w-[1280px] mx-auto px-4">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;